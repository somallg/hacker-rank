export interface GulpConfig {
  src: string;
  tools: string;
  tsSrc: string;
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
  tsTools: `${tools}/**/*.ts`,
  alljs: `${src}/**/*.js`,
  alldef: `${src}/**/*.d.ts`
};
