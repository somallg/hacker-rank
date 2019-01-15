import { lstatSync, readdirSync, readFile } from 'fs';
import { basename, join } from 'path';

import { not } from './fn.util';

function isDirectory(source: string): boolean {
  return lstatSync(source).isDirectory();
}

function getFiles(source: string): string[] {
  return (
    readdirSync(source)
      .map((name: string) => join(source, name))
      .filter(not(isDirectory))
      // @ts-ignore
      .map(basename)
  );
}

function readFilePromise(fileName: string): Promise<string> {
  return new Promise<string>(
    (
      resolve: (value?: string) => void,
      reject: (value?: string) => void
    ): void => {
      readFile(fileName, 'utf-8', (err: Error, data: string) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
    }
  );
}

export { getFiles, readFilePromise };
