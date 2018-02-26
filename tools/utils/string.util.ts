export function pascalize(s: string): string {
  return s
    .split('-')
    .map((e: string) => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    })
    .join('');
}
