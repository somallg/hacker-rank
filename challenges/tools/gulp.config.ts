const src = 'challenges';
const tools = 'tools';

const gulpConfig = Object.freeze({
  alljs: `${src}/**/*.js`,
  dist: 'dist',
  jsSpec: `${src}/**/*.spec.js`,
  jsSrc: `${src}/**/*.js`,
  jsTools: `${tools}/**/*.js`
});

export { gulpConfig };
