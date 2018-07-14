function vector() {
  const arr: any[] = [];

  return {
    get: function get(i: any) {
      return arr[i];
    },

    store: function store(i: any, v: any) {
      arr[i] = v;
    },

    append: function append(v: any) {
      arr.push(v);
    }
  };
}

export { vector };
