type PredicateFunction<T> = (value: T) => boolean;

function not<T>(predicate: PredicateFunction<T>): PredicateFunction<T> {
  return (value: T) => !predicate(value);
}

export { not };
