function pascalize(s: string): string {
  return s
    .split('-')
    .map(e => e.charAt(0).toUpperCase() + e.slice(1))
    .join('');
}

export { pascalize };