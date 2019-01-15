/**
 * JustifiedText
 */

const SPC: string = ' ';

function packWords(words: string[], len: number): string[][] {
  const result: string[][] = [[]];

  let index: number = 0;
  let l: number = -1;

  words.forEach((w: string) => {
    if (l + w.length + 1 <= len) {
      result[index].push(w);
      l += w.length + 1;
    } else {
      index += 1;
      result[index] = [w];
      l = w.length;
    }
  });

  return result;
}

function join(words: string[], paddingLeft: number, nbSpaces: number): string {
  const l: number = words.length;

  return words.reduce((acc: string, w: string, index: number) => {
    if (index === l - 1) {
      return acc + w;
    }

    // tslint:disable-next-line
    return acc + w + SPC.repeat(nbSpaces + (paddingLeft-- > 0 ? 1 : 0));
  }, '');
}

function alignLeft(words: string[], wordsLen: number, len: number): string {
  if (wordsLen === 0) {
    return '';
  }

  return words.join(SPC) + SPC.repeat(len - wordsLen - words.length + 1);
}

function justifiedText(words: string[], len: number): string[] {
  const lines: string[][] = packWords(words, len);
  const result: string[] = [];

  lines.forEach((line: string[], index: number) => {
    const lineLen: number = line.reduce(
      (acc: number, word: string) => acc + word.length,
      0
    );
    if (line.length === 1 || index === lines.length - 1) {
      result.push(alignLeft(line, lineLen, len));
    } else {
      const nbSpaces: number = Math.floor((len - lineLen) / (line.length - 1));
      const paddingLeft: number = (len - lineLen) % (line.length - 1);
      result.push(join(line, paddingLeft, nbSpaces));
    }
  });

  return result.filter((w: string) => w.length > 0);
}

export { justifiedText };
