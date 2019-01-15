function pbcopy(data: string): Promise<void> {
  return new Promise<void>(
    (resolve: (value?: void) => void, reject: (value?: void) => void): void => {
      // tslint:disable-next-line
      const proc: any = require('child_process').spawn('pbcopy');

      proc.on('error', reject);
      proc.on('close', resolve);

      proc.stdin.write(data);
      proc.stdin.end();
    }
  );
}

export { pbcopy };
