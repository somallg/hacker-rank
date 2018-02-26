export interface GulpConfig {
  src: string;
  tools: string;
  tsSrc: string;
  tsSpec: string;
  tsTools: string;
  alljs: string;
  alldef: string;
}

const src: string = 'src';
const tools: string = 'tools';

export const gulpConfig: GulpConfig = {
  src,
  tools,
  tsSrc: `${src}/**/*.ts`,
  tsSpec: `${src}/**/*.spec.ts`,
  tsTools: `${tools}/**/*.ts`,
  alljs: `${src}/**/*.js`,
  alldef: `${src}/**/*.d.ts`
};
