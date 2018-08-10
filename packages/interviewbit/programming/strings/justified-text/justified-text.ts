/**
 * JustifiedText
 */

const SPC = ' ';

function packWords(words: string[], len: number): string[][] {
  const result: string[][] = [[]];

  let index = 0;
  let l = -1;

  words.forEach(w => {
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

function join(words: string[], paddingLeft: number, nbSpaces: number) {
  const l = words.length;
  return words.reduce((acc, w, index) => {
    if (index === l - 1) {
      return acc + w;
    }

    return acc + w + SPC.repeat(nbSpaces + (paddingLeft-- > 0 ? 1 : 0));
  }, '');
}

function alignLeft(words: string[], wordsLen: number, len: number) {
  if (wordsLen === 0) {
    return '';
  }
  return words.join(SPC) + SPC.repeat(len - wordsLen - words.length + 1);
}

function justifiedText(words: string[], len: number): string[] {
  const lines: string[][] = packWords(words, len);
  const result: string[] = [];

  lines.forEach((line, index) => {
    const lineLen = line.reduce((acc, word) => acc + word.length, 0);
    if (line.length === 1 || index === lines.length - 1) {
      result.push(alignLeft(line, lineLen, len));
    } else {
      const nbSpaces = Math.floor((len - lineLen) / (line.length - 1));
      const paddingLeft = (len - lineLen) % (line.length - 1);
      result.push(join(line, paddingLeft, nbSpaces));
    }
  });

  return result.filter(w => w.length > 0);
}

export { justifiedText };
