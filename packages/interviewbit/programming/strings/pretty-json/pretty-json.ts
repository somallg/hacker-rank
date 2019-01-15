/**
 * PrettyJson
 */

const indent: string = '\t';
const OPEN_BRACE: string[] = ['[', '{'];
const CLOSING_BRACE: string[] = [']', '}'];

function indentize(level: number): string {
  let result: string = '';
  for (let i: number = 0; i < level; i = i + 1) {
    result = `${indent}${result}`;
  }

  return result;
}

function prettyJson(json: string): string[] {
  const result: string[] = [];
  const l: number = json.length;

  let temp: string = '';
  let indentLevel: number = 0;

  for (let i: number = 0; i < l; i = i + 1) {
    const currentChar: string = json[i];

    if (OPEN_BRACE.indexOf(currentChar) !== -1) {
      if (temp.trim().length > 0) {
        result.push(`${indentize(indentLevel)}${temp}`);
      }
      result.push(`${indentize(indentLevel)}${currentChar}`);
      indentLevel += 1;
      temp = '';
    } else if (CLOSING_BRACE.indexOf(currentChar) !== -1) {
      if (temp.trim().length > 0) {
        result.push(`${indentize(indentLevel)}${temp}`);
      }
      indentLevel -= 1;
      result.push(`${indentize(indentLevel)}${currentChar}`);
      temp = '';
    } else if (currentChar === ',') {
      if (CLOSING_BRACE.indexOf(json[i - 1]) !== -1) {
        const last: string | undefined = result.pop();
        result.push(`${last},`);
      } else {
        result.push(`${indentize(indentLevel)}${temp},`);
      }
      temp = '';
    } else {
      temp = `${temp}${currentChar}`;
    }
  }

  return result;
}

export { prettyJson };
