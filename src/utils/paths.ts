/**
 * Veilige asset-URL onder Astro `base` (bv. /CE-iT-Bv/ op GitHub Pages).
 * BASE_URL heeft alleen een slash op het einde als de config die heeft —
 * deze helper garandeert precies één slash, altijd.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith('/') ? base : `${base}/`}${path.replace(/^\//, '')}`;
}
