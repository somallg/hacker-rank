function add1(n) {
  return n + 1;
}

function eternity(x) {
  return eternity(x);
}

function isNull(l) {
  return l.length === 0;
}

function cdr(l) {
  return l.slice(1);
}

var f = (length => l =>
  isNull(l)
    ? 0
    : add1(
        (l =>
          isNull(l)
            ? 0
            : add1((l => (isNull(l) ? 0 : add1(length(cdr(l)))))(cdr(l))))(
          cdr(l)
        )
      ))(eternity);

var g = (mkLength => mkLength(mkLength))(mkLength =>
  (length => l => (isNull(l) ? 0 : add1(length(cdr(l)))))(x =>
    mkLength(mkLength)(x)
  )
); // mkLength

var h = (le =>
  (mkLength => mkLength(mkLength))(mkLength => le(x => mkLength(mkLength)(x))))(
  length => l => (isNull(l) ? 0 : add1(length(cdr(l))))
);

var Y = le => (f => f(f))(f => le(x => f(f)(x)));

var factorial = Y(fact => n => (n <= 2 ? 1 : n * fact(n - 1)));

factorial(10);
