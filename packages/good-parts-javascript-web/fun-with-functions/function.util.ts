type UnaryFunction<InputType, OutputType> = (value: InputType) => OutputType;

type BinaryFunction<InputType, OutputType> = (
  first: InputType,
  second: InputType
) => OutputType;

type TernaryFunction<InputType, OutputType> = (
  first: InputType,
  second: InputType,
  third: InputType
) => OutputType;

export { UnaryFunction, BinaryFunction, TernaryFunction };
