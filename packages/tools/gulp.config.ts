const src: string = 'packages';
const tools: string = 'tools';

const gulpConfig: {
  alljs: string;
  dist: string;
  jsSpec: string;
  jsSrc: string;
  jsTools: string;
  packagesNodeModules: string;
  tsSpec: string;
  tsSrc: string;
  schematicsFiles: string;
} = Object.freeze({
  alljs: `${src}/**/*.js`,
  dist: 'dist',
  jsSpec: `${src}/**/*.spec.js`,
  jsSrc: `${src}/**/*.js`,
  jsTools: `${tools}/**/*.js`,
  packagesNodeModules: `${src}/**/node_modules/**`,
  tsSpec: `${src}/**/*.spec.ts`,
  tsSrc: `${src}/**/*.ts`,
  schematicsFiles: `${src}/schematics/**/*.ts`
});

export { gulpConfig };
