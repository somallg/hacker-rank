type InputType = number | undefined;
type OutputType = number | undefined;

type UnaryFunction = (value: InputType) => OutputType;
type BinaryFunction = (first: InputType, second: InputType) => OutputType;
type TernaryFunction = (
  first: InputType,
  second: InputType,
  third: InputType
) => OutputType;

export { UnaryFunction, BinaryFunction, TernaryFunction };
