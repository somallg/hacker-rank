interface TestCase<I, O> {
  name: string;
  input: I;
  output: O;
}

interface PerformanceTestCase {
  name: string;
  inputSize: number;
}

interface Fixture<I, O> {
  name: string;
  exampleTests: TestCase<I, O>[];
  correctnessTests: TestCase<I, O>[];
  performanceTests: PerformanceTestCase[];
}

function prettyFormatArray(array: any[]): string {
  return array
    .map(
      (param: any) => (Array.isArray(param) ? `[${param.join(', ')}]` : param)
    )
    .join(', ');
}

function prettyFormat<I, O>(inputOrOutput: I | O): string {
  return Array.isArray(inputOrOutput)
    ? `[${prettyFormatArray(inputOrOutput)}]`
    : JSON.stringify(inputOrOutput);
}

function getTestCaseDescription<I, O>(testCase: TestCase<I, O>): string {
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
