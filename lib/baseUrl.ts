/**
 * Utilities for consistently building/normalizing the project's base URL
 * and API URLs in one place.
 */

/** Return sanitized normalized base URL (includes protocol). If not set, returns empty string. */
export function getSanitizedBase(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const trimmed = raw.replace(/\/+$/g, ""); // remove trailing slashes
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://"))
    return trimmed;
  // Default to https when protocol is omitted
  return `https://${trimmed}`;
}

/**
 * Build an API or absolute URL using the sanitized base when available.
 * - If base is empty, returns the relative `path` (ensures leading `/`).
 * - If base exists, joins base + path (avoids duplicate slashes).
 */
export function buildApiUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  const base = getSanitizedBase();
  return base ? `${base}${path}` : path;
}

export default buildApiUrl;
