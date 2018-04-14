module.exports = {
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': 'off',
    'no-var': 'off',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'vars-on-top': 'off',
    'no-plusplus': 'off'
  },
  env: {
    node: true,
    jasmine: true
  }
};
