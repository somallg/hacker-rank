type Immutable = string | number;

type MemoFn<InputType, OutputType> = (x: InputType) => OutputType;

type KeyFn<InputType> = (k: InputType) => Immutable;

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
  keyFn: KeyFn<InputType> = id
): MemoFn<InputType, OutputType> {
  const memo: Map<Immutable, OutputType> = new Map<Immutable, OutputType>();

  return (x: InputType): OutputType => {
    let cachedValue: OutputType = <OutputType>memo.get(keyFn(x));
    if (cachedValue === undefined) {
      cachedValue = fn(x);
      memo.set(keyFn(x), cachedValue);
    }

    return cachedValue;
  };
}

export { MemoFn, memorized };
