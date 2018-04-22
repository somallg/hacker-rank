function indexSource(problem: string): string {
  return `/**
 * THIS IS AN AUTO-GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */

export * from './${problem}';
`;
}

function indexRootSource(problems: string[]): string {
  return `/**
 * THIS IS AN AUTO-GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */

${problems.map(p => `export * from './${p}';`).join('\n')}
`;
}

export { indexSource, indexRootSource };
