function camelize(s: string): string {
  return s
    .split('-')
    .map((e, i) => (i === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
    .join('');
}

function pascalize(s: string): string {
  return s
    .split('-')
    .map(e => e.charAt(0).toUpperCase() + e.slice(1))
    .join('');
}

export { camelize, pascalize };
