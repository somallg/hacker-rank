export interface PrettierConfig {
  parser: string;
  printWidth: number;
  singleQuote: boolean;
  arrowParens: string;
}

export const prettierConfig: PrettierConfig = {
  parser: 'typescript',
  printWidth: 80,
  singleQuote: true,
  arrowParens: 'always'
};
