// Vercel Blob без залежностей (REST). Потрібна змінна BLOB_READ_WRITE_TOKEN —
// вона з'являється автоматично після підключення сховища: Vercel → Storage → Blob → Connect to project.
const API = 'https://blob.vercel-storage.com';
export const BLOB_TOKEN = () => (process.env.BLOB_READ_WRITE_TOKEN || '').trim();
export const hasBlob = () => !!BLOB_TOKEN();
export const safeName = (n) => {
  const s = String(n || 'file').normalize('NFKD').replace(/[^\w.\-]+/g, '_').replace(/_+/g, '_').replace(/^[_.]+/, '').slice(-80);
  return s || 'file';
};
export async function blobPut(path, body, contentType) {
  const url = API + '/' + String(path).split('/').map(encodeURIComponent).join('/');
  const r = await (globalThis.__blobFetch || fetch)(url, {
    method: 'PUT', body,
    headers: { authorization: 'Bearer ' + BLOB_TOKEN(), 'x-api-version': '7', 'x-content-type': contentType || 'application/octet-stream', 'x-add-random-suffix': '1', 'x-cache-control-max-age': '31536000' },
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.url) throw new Error('Blob ' + r.status + (j.error && j.error.message ? ': ' + j.error.message : ''));
  return j; // { url, downloadUrl, pathname, contentType }
}
export async function blobDel(urls) {
  if (!urls.length) return;
  const r = await (globalThis.__blobFetch || fetch)(API + '/delete', { method: 'POST', headers: { authorization: 'Bearer ' + BLOB_TOKEN(), 'x-api-version': '7', 'content-type': 'application/json' }, body: JSON.stringify({ urls }) });
  if (!r.ok) throw new Error('Blob delete ' + r.status);
}
