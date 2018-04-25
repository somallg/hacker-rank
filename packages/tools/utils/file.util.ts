import { lstatSync, readdirSync, readFile } from 'fs';
import { basename, join } from 'path';

import { not } from './fn.util';

function isDirectory(source: string): boolean {
  return lstatSync(source).isDirectory();
}

function getFiles(source: string): string[] {
  return readdirSync(source)
    .map(name => join(source, name))
    .filter(not(isDirectory))
    .map(f => basename(f));
}

function getDirectories(source: string): string[] {
  return readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(p => basename(p));
}

function readFilePromise(fileName: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    readFile(fileName, 'utf-8', (err: Error, data: string) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    });
  });
}

export { getDirectories, getFiles, readFilePromise };
