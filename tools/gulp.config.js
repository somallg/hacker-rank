const src = 'src';
const tools = 'tools';

const gulpConfig = Object.freeze({
  src,
  tools,
  jsSrc: `${src}/**/*.js`,
  jsSpec: `${src}/**/*.spec.js`,
  jsTools: `${tools}/**/*.js`,
  alljs: `${src}/**/*.js`,
  alldef: `${src}/**/*.d.ts`
});

module.exports = {
  gulpConfig
};
