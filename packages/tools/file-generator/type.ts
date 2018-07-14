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

interface SourceFileConfigOptions {
  [key: string]: SourceFileConfig[];
}

export { SourceFileConfig, SourceFileConfigOptions, SourceFn };
