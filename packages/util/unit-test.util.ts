interface TestCase<InputType, OutputType> {
  name: string;
  input: InputType;
  output: OutputType;
  inputSize: number;
}

interface PerformanceTestCase<InputType, OutputType>
  extends TestCase<InputType, OutputType> {
  inputSize: number;
}

interface GenericTests<InputType, OutputType> {
  name: string;
  testCases: Array<TestCase<InputType, OutputType>>;
}

interface ExampleTests<InputType, OutputType>
  extends GenericTests<InputType, OutputType> {}

interface CorrectnessTests<InputType, OutputType>
  extends GenericTests<InputType, OutputType> {}

interface PerformanceTests<InputType, OutputType>
  extends GenericTests<InputType, OutputType> {}

interface Fixture<InputType, OutputType> {
  name: string;
  testCategories: [
    ExampleTests<InputType, OutputType>,
    CorrectnessTests<InputType, OutputType>,
    PerformanceTests<InputType, OutputType>
  ];
}

function prettyFormatArray(array: any[]): string {
  return array
    .map(
      (param: any) => (Array.isArray(param) ? `[${param.join(', ')}]` : param)
    )
    .join(', ');
}

function prettyFormat<InputType, OutputType>(
  inputOrOutput: InputType | OutputType
): string {
  return Array.isArray(inputOrOutput)
    ? `[${prettyFormatArray(inputOrOutput)}]`
    : JSON.stringify(inputOrOutput);
}

function getTestCaseDescription<InputType, OutputType>(
  testCase: TestCase<InputType, OutputType>
): string {
  return `should return ${prettyFormat(testCase.output)} for ${
    testCase.name
  } input: ${prettyFormat(testCase.input)}`;
}

function getPerformanceTestCaseDescription(
  testCase: PerformanceTestCase
): string {
  return `should run for ${
    testCase.name
  } input of size ${testCase.inputSize.toLocaleString()}`;
}

export {
  TestCase,
  PerformanceTestCase,
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription
};
