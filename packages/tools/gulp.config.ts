const src = 'packages';
const tools = 'tools';
const dist = 'dist';

const gulpConfig = Object.freeze({
  dist,
  src,
  tools,
  jsSrc: `${src}/**/*.js`,
  jsSpec: `${src}/**/*.spec.js`,
  jsTools: `${tools}/**/*.js`,
  alljs: `${src}/**/*.js`,
  alldef: `${src}/**/*.d.ts`
});

export { gulpConfig };
