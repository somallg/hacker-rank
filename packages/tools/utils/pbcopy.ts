function pbcopy(data: string) {
  return new Promise<any>((resolve, reject) => {
    const proc = require('child_process').spawn('pbcopy');

    proc.on('error', reject);
    proc.on('close', resolve);

    proc.stdin.write(data);
    proc.stdin.end();
  });
}

export { pbcopy };
