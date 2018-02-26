import { lstatSync, readdirSync } from 'fs';
import { basename, join } from 'path';

export const isDirectory: (source: string) => boolean = (
  source: string
): boolean => lstatSync(source).isDirectory();

export const getDirectories: (source: string) => string[] = (
  source: string
): string[] =>
  readdirSync(source)
    .map((name: string) => join(source, name))
    .filter(isDirectory)
    .map((p: string) => basename(p)); // tslint:disable-line
