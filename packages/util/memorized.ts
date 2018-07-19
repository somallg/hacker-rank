type Immutable = string | number;

type MemoFn<InputType, OutputType> = (x: InputType) => OutputType;

function id<InputType>(x: InputType): Immutable {
  if (typeof x === 'number') {
    return x;
  } else if (typeof x === 'string') {
    return x;
  }

  return JSON.stringify(x);
}

function memorized<InputType, OutputType>(
  fn: MemoFn<InputType, OutputType>,
  keyFn = id
): MemoFn<InputType, OutputType> {
  const memo = new Map<Immutable, OutputType>();

  return (x: InputType): OutputType => {
    const [cachedValue = fn(x)] = [memo.get(keyFn(x))];
    memo.set(keyFn(x), cachedValue);

    return cachedValue;
  };
}

export { memorized };
