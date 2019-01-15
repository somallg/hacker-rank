/**
 * @url https://www.rankk.org/challenges/eliza-speak.py
 */

import { getFiles, readFilePromise } from '../../../tools/utils/file.util';

const folderName: string = `${__dirname}/numfiles`;

function getChunks(nbChunk: number, length: number): number[][] {
  return Array(length / nbChunk)
    .fill(undefined)
    .map((_: undefined, index: number) => [
      index * nbChunk,
      index * nbChunk + nbChunk
    ]);
}

function parseFile(content: string, reg: RegExp): string[] {
  try {
    const found: RegExpMatchArray | null = content.match(reg);

    if (found) {
      return [found[1], found[2]];
    }
  } catch (e) {
    return [];
  }

  return [];
}

interface MagicNumber {
  magicNumber: string;
  next: string;
}

async function solveElizaSpeak(): Promise<string> {
  const files: string[] = getFiles(folderName);

  return Promise.all(
    files.map((f: string) => readFilePromise(`${folderName}/${f}`))
  )
    .then((contents: string[]) =>
      contents.reduce(
        (map: Map<string, MagicNumber>, content: string, index: number) => {
          const [next, magicNumber]: string[] =
            files[index] === 'readme'
              ? parseFile(content, /Start from file (\d+)/)
              : parseFile(content, /(\d+) \[(\d+)\]/);
          map.set(files[index], {
            magicNumber,
            next
          });

          return map;
        },
        new Map<string, MagicNumber>()
      )
    )
    .then((map: Map<string, MagicNumber>) => {
      let next: string = 'readme';
      let magicNumber: string;
      const res: string[] = [];

      while (map.has(next)) {
        ({ next = '', magicNumber = '' } = map.get(next) || {});
        res.push(magicNumber);
      }

      return res.join('');
    })
    .then((res: string) =>
      getChunks(8, res.length)
        .map((e: number[]) => {
          return e;
        })
        .map(([start, end]: [number, number]) => res.slice(start, end))
        .map((bin: string) => parseInt(bin, 2))
        .map((code: number) => String.fromCharCode(code))
        .join('')
    );
}

export { getChunks, solveElizaSpeak };
