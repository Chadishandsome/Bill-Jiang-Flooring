export function getImageURL(name, location) {
  return new URL(`../assets/${location}/${name}`, import.meta.url).href;
}
