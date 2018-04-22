import { lstatSync, readdirSync } from 'fs';
import { basename, join } from 'path';

function isDirectory(source: string): boolean {
  return lstatSync(source).isDirectory();
}

function getDirectories(source: string): string[] {
  return readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(p => basename(p));
}

export { getDirectories };
