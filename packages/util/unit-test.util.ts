type TestFn<InputType, OutputType> = (input: InputType) => OutputType;

type GeneratorFn<InputType> = (inputSize: number) => InputType;

interface TestCase<InputType, OutputType> {
  name: string;
  input: InputType;
  output: OutputType;
  inputSize: number;
  timeLimit: number;
}

interface TestCategory<InputType, OutputType> {
  name: string;
  isPerformanceTest: boolean;
  testCases: Array<TestCase<InputType, OutputType>>;
}

interface TestFixture<InputType, OutputType> {
  name: string;
  testCategories: Array<TestCategory<InputType, OutputType>>;
}

// interface TestExecutor<InputType, OutputType> {
//   executeTests: (
//     functionName: string,
//     functionToTest: TestFn<InputType, OutputType>,
//     generatorFn?: GeneratorFn<InputType>
//   ) => void;
// }

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

function getPerformanceTestCaseDescription<InputType, OutputType>(
  testCase: TestCase<InputType, OutputType>
): string {
  return `should run under ${testCase.timeLimit}ms for ${
    testCase.name
  } input of size ${testCase.inputSize.toLocaleString()}`;
}

function runSampleTests<InputType, OutputType>(
  fn: TestFn<InputType, OutputType>,
  testCategory: TestCategory<InputType, OutputType>
) {
  testCategory.testCases.forEach(testCase => {
    it(`${getTestCaseDescription(testCase)}`, () =>
      expect(fn.call(null, testCase.input)).toEqual(testCase.output));
  });
}

function runPerformanceTests<InputType, OutputType>(
  fn: TestFn<InputType, OutputType>,
  testCategory: TestCategory<InputType, OutputType>,
  generatorFn: GeneratorFn<InputType>
) {
  testCategory.testCases.forEach(testCase => {
    it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
      const start = Date.now();
      fn.call(null, generatorFn(testCase.inputSize));
      const end = Date.now();
      expect(end - start).toBeLessThanOrEqual(testCase.timeLimit);
    });
  });
}

function getTestCategories<InputType, OutputType>(
  fixture: TestFixture<InputType, OutputType>
) {
  return fixture.testCategories;
}

function createTestExecutor<InputType, OutputType>(
  testFixture: TestFixture<InputType, OutputType>
) {
  return function executeTests(
    functionName: string,
    functionToTest: TestFn<InputType, OutputType>,
    generatorFn?: GeneratorFn<InputType>
  ) {
    const [
      exampleTests,
      correctnessTests,
      performanceTests
    ] = getTestCategories(testFixture);

    describe(functionName, () => {
      [exampleTests, correctnessTests].forEach(test => {
        describe(`${test.name}`, () => runSampleTests(functionToTest, test));
      });

      if (generatorFn !== undefined) {
        describe(`${performanceTests.name}`, () =>
          runPerformanceTests(functionToTest, performanceTests, generatorFn));
      }
    });
  };
}

export { createTestExecutor, TestFixture };
