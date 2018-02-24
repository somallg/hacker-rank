export interface GulpConfig {
  tsSrc: string;
  tsTools: string;
  alljs: string;
  alldef: string;
}

const src: string = 'src';
const tools: string = 'tools';

export const gulpConfig: GulpConfig = {
  tsSrc: `${src}/**/*.ts`,
  tsTools: `${tools}/**/*.ts`,
  alljs: `${src}/**/*.js`,
  alldef: `${src}/**/*.d.ts`
};
