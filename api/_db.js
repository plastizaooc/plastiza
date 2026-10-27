// Minimal dependency-free Postgres client for Neon (HTTP "/sql" endpoint) + schema migration.
// Env: DATABASE_URL (added automatically by the Vercel ↔ Neon integration). POSTGRES_URL is accepted too.
// For local tests DB_HTTP_ENDPOINT can point to an emulator.

export const DB_URL = () => (process.env.DATABASE_URL || process.env.POSTGRES_URL || '').trim();
export const hasDb = () => !!DB_URL();

const PARSE = {
  16: (v) => v === 't' || v === 'true',
  20: Number, 21: Number, 23: Number, 700: Number, 701: Number, 1700: Number,
  114: (v) => JSON.parse(v), 3802: (v) => JSON.parse(v),
};

function endpoints() {
  if (process.env.DB_HTTP_ENDPOINT) return [process.env.DB_HTTP_ENDPOINT];
  const host = new URL(DB_URL().replace(/^postgres(ql)?:/, 'https:')).hostname;
  return [`https://${host.replace(/^[^.]+\./, 'api.')}/sql`, `https://${host}/sql`];
}
let goodEp = null;

export async function sql(query, params = []) {
  const eps = goodEp ? [goodEp] : endpoints();
  let last;
  for (const ep of eps) {
    let r;
    try {
      r = await fetch(ep, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Neon-Connection-String': DB_URL(), 'Neon-Raw-Text-Output': 'true', 'Neon-Array-Mode': 'false' },
        body: JSON.stringify({ query, params: params.map((p) => (p !== null && typeof p === 'object' ? JSON.stringify(p) : p)) }),
      });
    } catch (e) { last = e; continue; }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      if (r.status === 404 && eps.length > 1 && !goodEp) { last = new Error('404 ' + ep); continue; }
      throw new Error(j.message || `DB error ${r.status}`);
    }
    goodEp = ep;
    const types = {};
    (j.fields || []).forEach((f) => (types[f.name] = f.dataTypeID));
    return (j.rows || []).map((row) => {
      const o = {};
      for (const k in row) {
        const v = row[k];
        o[k] = v === null || typeof v !== 'string' || !PARSE[types[k]] ? v : PARSE[types[k]](v);
      }
      return o;
    });
  }
  throw last || new Error('DB unreachable');
}

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT NOT NULL DEFAULT '', role TEXT NOT NULL DEFAULT 'Менеджер',
    perms JSONB NOT NULL DEFAULT '[]', pass_hash TEXT NOT NULL DEFAULT '', active BOOLEAN NOT NULL DEFAULT TRUE,
    phone TEXT DEFAULT '', tg TEXT DEFAULT '', pos TEXT DEFAULT '', city TEXT DEFAULT '', hours TEXT DEFAULT '',
    notify JSONB NOT NULL DEFAULT '{"tg":true,"daily":true,"mine":false,"email":false}', last_seen TIMESTAMPTZ, created_at TIMESTAMPTZ NOT NULL DEFAULT now())`,
  `CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY, user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE, ua TEXT DEFAULT '', ip TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(), last_at TIMESTAMPTZ NOT NULL DEFAULT now(), expires_at TIMESTAMPTZ NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY, code TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now(), type TEXT DEFAULT '',
    name TEXT DEFAULT '', phone TEXT DEFAULT '', email TEXT DEFAULT '', contact TEXT DEFAULT '', messenger TEXT DEFAULT '',
    message TEXT DEFAULT '', comment TEXT DEFAULT '', items JSONB NOT NULL DEFAULT '[]', files JSONB NOT NULL DEFAULT '[]', source JSONB NOT NULL DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'new', manager_id INT REFERENCES users(id) ON DELETE SET NULL, due DATE, note TEXT DEFAULT '', tg_ok BOOLEAN DEFAULT FALSE)`,
  `CREATE INDEX IF NOT EXISTS leads_created ON leads(created_at DESC)`,
  `CREATE TABLE IF NOT EXISTS lead_events (
    id SERIAL PRIMARY KEY, lead_id INT NOT NULL REFERENCES leads(id) ON DELETE CASCADE, kind TEXT NOT NULL, text TEXT NOT NULL DEFAULT '',
    user_id INT REFERENCES users(id) ON DELETE SET NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT now())`,
  `CREATE TABLE IF NOT EXISTS clients (
    key TEXT PRIMARY KEY, company TEXT DEFAULT '', person TEXT DEFAULT '', phone TEXT DEFAULT '', email TEXT DEFAULT '', tags TEXT DEFAULT '', note TEXT DEFAULT '', updated_at TIMESTAMPTZ DEFAULT now())`,
  `CREATE TABLE IF NOT EXISTS audit_log (
    id SERIAL PRIMARY KEY, user_id INT REFERENCES users(id) ON DELETE SET NULL, who TEXT DEFAULT '', action TEXT NOT NULL, section TEXT DEFAULT '', created_at TIMESTAMPTZ NOT NULL DEFAULT now())`,
  `CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value JSONB NOT NULL, updated_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_by INT)`,
];
let migrated = null;
export function migrate() {
  if (!migrated) migrated = (async () => { for (const q of SCHEMA) await sql(q); })().catch((e) => { migrated = null; throw e; });
  return migrated;
}
