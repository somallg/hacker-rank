interface TestCase<InputType, OutputType> {
  name: string;
  input: InputType;
  output: OutputType;
}

interface PerformanceTestCase {
  name: string;
  inputSize: number;
}

interface Fixture<InputType, OutputType> {
  name: string;
  exampleTests: Array<TestCase<InputType, OutputType>>;
  correctnessTests: Array<TestCase<InputType, OutputType>>;
  performanceTests: PerformanceTestCase[];
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
