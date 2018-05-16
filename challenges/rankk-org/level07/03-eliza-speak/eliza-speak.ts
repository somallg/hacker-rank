/**
 * @url https://www.rankk.org/challenges/eliza-speak.py
 */

import { getFiles, readFilePromise } from '../../../tools/utils/file.util';

const folderName = `${__dirname}/numfiles`;

function getChunks(nbChunk: number, length: number): number[][] {
  return Array(length / nbChunk)
    .fill(undefined)
    .map((_, index) => [index * nbChunk, index * nbChunk + nbChunk]);
}

function parseFile(content: string, reg: RegExp): string[] {
  try {
    const found = content.match(reg);

    if (found) {
      return [found[1], found[2]];
    }
  } catch (e) {
    return [];
  }

  return [];
}

async function solveElizaSpeak(): Promise<string> {
  const files = getFiles(folderName);

  return Promise.all(files.map(f => readFilePromise(`${folderName}/${f}`)))
    .then(contents =>
      contents.reduce((map, content, index) => {
        const [next, magicNumber] =
          files[index] === 'readme'
            ? parseFile(content, /Start from file (\d+)/)
            : parseFile(content, /(\d+) \[(\d+)\]/);
        map.set(files[index], {
          magicNumber,
          next
        });
        return map;
      }, new Map<string, { magicNumber: string; next: string }>())
    )
    .then(map => {
      let next = 'readme';
      let magicNumber: string;
      const res: string[] = [];

      while (map.has(next)) {
        ({ next = '', magicNumber = '' } = map.get(next) || {});
        res.push(magicNumber);
      }

      return res.join('');
    })
    .then(res =>
      getChunks(8, res.length)
        .map(e => {
          return e;
        })
        .map(([start, end]) => res.slice(start, end))
        .map(bin => parseInt(bin, 2))
        .map(code => String.fromCharCode(code))
        .join('')
    );
}

export { getChunks, solveElizaSpeak };
