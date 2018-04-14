function pascalize(s) {
  return s
    .split('-')
    .map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    })
    .join('');
}

module.exports = {
  pascalize
};
