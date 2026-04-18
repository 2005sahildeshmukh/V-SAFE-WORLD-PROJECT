/**
 * Prepends the GitHub Pages basePath to asset paths.
 * On GitHub Pages the repo is served from /V-SAFE-WORLD-PROJECT/,
 * so any absolute /images/... path must be prefixed at build time.
 */
const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/V-SAFE-WORLD-PROJECT' : '';

export function assetPath(path) {
  // Avoid double-prefixing
  if (!path || path.startsWith('http') || path.startsWith(BASE_PATH)) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}
