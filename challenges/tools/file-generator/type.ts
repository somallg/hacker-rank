type SourceFn = (input: SourceFnInput) => string;

interface SourceFnInput {
  challengeName: string;
  problem: string;
  functionName: string;
  url: string;
}

interface SourceFileConfig {
  name: string;
  sourceFn: SourceFn;
}

export { SourceFn, SourceFileConfig };
