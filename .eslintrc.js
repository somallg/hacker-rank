module.exports = {
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': 'off',
    'no-var': 'off',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'vars-on-top': 'off',
    'no-plusplus': 'off',
    // TODO remove below rules
    'no-multi-assign': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-lonely-if': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off'
  },
  env: {
    node: true,
    jasmine: true
  }
};
