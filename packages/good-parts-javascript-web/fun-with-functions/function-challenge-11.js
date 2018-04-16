function vector() {
  const arr = [];

  return {
    get: function get(i) {
      return arr[i];
    },

    store: function store(i, v) {
      arr[i] = v;
    },

    append: function append(v) {
      arr.push(v);
    }
  };
}

export { vector };
