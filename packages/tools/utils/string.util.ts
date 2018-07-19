type TransformFn = (value: string, index: number) => string;

type StringTokenizer = (
  s: string,
  delimiter: string,
  transformFn: TransformFn
) => string;

function splitString(s: string, delimiter = '-'): string[] {
  return s.split(delimiter);
}

const stringTokenize: StringTokenizer = (s, delimiter, transformFn) => {
  return splitString(s)
    .map(transformFn)
    .join(delimiter);
};

function camelize(s: string, delimiter = '') {
  return stringTokenize(
    s,
    delimiter,
    (e, i) => (i === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1))
  );
}

function pascalize(s: string, delimiter = '') {
  return stringTokenize(
    s,
    delimiter,
    e => e.charAt(0).toUpperCase() + e.slice(1)
  );
}

function snakelize(s: string, delimiter = '_') {
  return stringTokenize(s, delimiter, e => e);
}

export { camelize, pascalize, snakelize };
