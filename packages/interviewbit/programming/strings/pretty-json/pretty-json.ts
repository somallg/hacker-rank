/**
 * PrettyJson
 */

const indent = '\t';
const OPEN_BRACE = ['[', '{'];
const CLOSING_BRACE = [']', '}'];

function indentize(level: number) {
  let result = '';
  for (let i = 0; i < level; i = i + 1) {
    result = `${indent}${result}`;
  }

  return result;
}

function prettyJson(json: string): string[] {
  const result: string[] = [];
  const l = json.length;

  let temp = '';
  let indentLevel = 0;

  for (let i = 0; i < l; i = i + 1) {
    const currentChar = json[i];

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
        const last = result.pop();
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
