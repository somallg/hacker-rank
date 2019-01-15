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
  focus: boolean;
  testCases: TestCase<InputType, OutputType>[];
}

interface TestFixture<InputType, OutputType> {
  name: string;
  testCategories: TestCategory<InputType, OutputType>[];
  skip?: boolean;
}

interface TestExecutor<InputType, OutputType> {
  executeTests(
    functionToTest: TestFn<InputType, OutputType>,
    functionName?: string | GeneratorFn<InputType>,
    generatorFn?: GeneratorFn<InputType>
  ): Thenable<void> | void;
}

// tslint:disable:no-any
function prettyFormatArray(array: any[]): string {
  return array
    .map((param: any) =>
      Array.isArray(param) ? `\n${' '.repeat(12)}[${param.join(', ')}]` : param
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
  testCase: TestCase<InputType, OutputType>,
  timeLimit: number = 200
): string {
  return `should run under ${timeLimit || 200}ms for ${
    testCase.name
  } input of size ${testCase.inputSize.toLocaleString()}`;
}

function runSampleTests<InputType, OutputType>(
  fn: TestFn<InputType, OutputType>,
  testCategory: TestCategory<InputType, OutputType>
): void {
  testCategory.testCases.forEach(
    (testCase: TestCase<InputType, OutputType>) => {
      it(`${getTestCaseDescription(testCase)}`, () =>
        expect(fn.call(undefined, testCase.input)).toEqual(
          testCase.output === null ? undefined : testCase.output
        ));
    }
  );
}

function runPerformanceTests<InputType, OutputType>(
  fn: TestFn<InputType, OutputType>,
  testCategory: TestCategory<InputType, OutputType>,
  generatorFn: GeneratorFn<InputType>
): void {
  testCategory.testCases.forEach(
    (testCase: TestCase<InputType, OutputType>, index: number) => {
      const timeLimit: number = testCase.timeLimit || (index + 1) * 200;

      it(`${getPerformanceTestCaseDescription(testCase, timeLimit)}`, () => {
        const start: number = Date.now();
        fn.call(undefined, generatorFn(testCase.inputSize));
        const end: number = Date.now();
        expect(end - start).toBeLessThanOrEqual(timeLimit);
      });
    }
  );
}

function createTestExecutor<InputType, OutputType>(
  fixture: TestFixture<InputType, OutputType>
): TestExecutor<InputType, OutputType> {
  return { executeTests };

  function executeTests(
    functionToTest: TestFn<InputType, OutputType>,
    functionNameOrGenerator?: string | GeneratorFn<InputType>,
    generatorFn?: GeneratorFn<InputType>
  ): Thenable<void> {
    if (Boolean(fixture.skip)) {
      [it, xit] = [xit, it];
    }

    return createBox(fixture)
      .then(
        (testFixture: TestFixture<InputType, OutputType>) =>
          testFixture.testCategories
      )
      .then(
        // prettier-ignore
        ([exampleTests, correctnessTests, performanceTests]: TestCategory<InputType ,OutputType>[]) => {
          // tslint:disable:no-parameter-reassignment
          if (functionNameOrGenerator === undefined) {
            functionNameOrGenerator = functionToTest.name;
          }

          if (typeof functionNameOrGenerator === 'function') {
            generatorFn = functionNameOrGenerator;
            functionNameOrGenerator = functionToTest.name;
          }

          describe(functionNameOrGenerator, () => {
            [exampleTests, correctnessTests].forEach(
              (test: TestCategory<InputType, OutputType>) => {
                describe(`${test.name}`, () =>
                  runSampleTests(functionToTest, test));
              }
            );

            if (typeof generatorFn === 'function') {
              if (performanceTests.focus) {
                [describe, fdescribe] = [fdescribe, describe];
                [it, fit] = [fit, it];
              }

              describe(`${performanceTests.name}`, () =>
                runPerformanceTests(
                  functionToTest,
                  performanceTests,
                  // prettier-ignore
                  <GeneratorFn<InputType>>generatorFn
                ));
            }
          });
        }
      );
  }
}

function createBox<T>(data: T): Thenable<T> {
  return {
    then: <V>(fn: (data: T) => V): Thenable<V> => createBox<V>(fn(data))
  };
}

interface Thenable<T> {
  then<V>(fn: (data: T) => V): Thenable<V>;
}

function identityf<T>(data: T): T {
  return data;
}

export { createTestExecutor, identityf, TestFixture };
