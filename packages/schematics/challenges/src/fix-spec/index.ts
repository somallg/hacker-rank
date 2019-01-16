import { Path } from '@angular-devkit/core';
import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

import { Schema as FixSpecOptions } from './schema';

const printer: ts.Printer = ts.createPrinter();
const IMPORT_CHALLENGES: string = '@challenges/util';
// const FUNC_NAME: string = 'createTestExecutor';

const methodNames: string[] = [];

// @ts-ignore
// let functionName: string = '';
// @ts-ignore
// let asExpression: string = '';

// tslint:disable-next-line
export default function(options: FixSpecOptions): Rule {
  const { directory }: FixSpecOptions = options;

  if (!directory) {
    throw new SchematicsException(
      'Invalid options, "directory" must be correct'
    );
  }

  return (tree: Tree): Tree => {
    tree.getDir(directory).visit((filePath: Path) => {
      if (!filePath.endsWith('.spec.ts')) {
        return;
      }

      const fileContent: Buffer | null = tree.read(filePath);
      if (!fileContent) {
        return;
      }

      const sourceFile: ts.SourceFile = ts.createSourceFile(
        filePath,
        fileContent.toString(),
        ts.ScriptTarget.ESNext,
        true
      );

      const result: ts.TransformationResult<ts.Node> = ts.transform(
        sourceFile,
        [
          transformPropertyAccess,
          transformImportDeclaration,
          transformAsExpression
        ].map(createTransformer)
      );

      const transformedSourceFile: ts.Node = result.transformed[0];

      tree.overwrite(
        filePath,
        printer.printFile(<ts.SourceFile>transformedSourceFile)
      );

      result.dispose();
    });

    return tree;
  };
}

function createTransformer<T extends ts.Node>(
  fn: (node: T) => T
): ts.TransformerFactory<T> {
  return transformer;

  function transformer(context: ts.TransformationContext): ts.Transformer<T> {
    return transform;

    function transform(rootNode: T): T {
      return ts.visitNode(rootNode, visit);
    }

    function visit(node: T): T {
      const newNode: T = fn(node);
      if (newNode !== node) {
        return newNode;
      }

      return ts.visitEachChild(node, visit, context);
    }
  }
}

// @ts-ignore
function transformImportDeclaration(node: ts.Node): ts.Node {
  if (ts.isImportDeclaration(node)) {
    // prettier-ignore
    const moduleSpecifier: string = (<ts.ImportDeclaration>node).moduleSpecifier.getText();
    if (moduleSpecifier.includes(IMPORT_CHALLENGES)) {
      const elements: ts.ImportSpecifier[] = methodNames
        .concat('TestFixture')
        .map((name: string) =>
          ts.createImportSpecifier(undefined, ts.createIdentifier(name))
        );

      return ts.createImportDeclaration(
        undefined,
        undefined,
        ts.createImportClause(undefined, ts.createNamedImports(elements)),
        ts.createStringLiteral(IMPORT_CHALLENGES)
      );
    }
  }

  return node;
}

// function transformParenExpression(node: ts.Node): ts.Node {
//   if (
//     ts.isCallExpression(node) &&
//     node.getText().indexOf(`describe('${functionName}'`) === 0
//   ) {
//     const functionCall: ts.CallExpression = ts.createCall(
//       ts.createIdentifier(`ut.${FUNC_NAME}`),
//       undefined,
//       [ts.createIdentifier(asExpression)]
//     );
//
//     const propertyAccess: ts.PropertyAccessExpression = ts.createPropertyAccess(
//       functionCall,
//       ts.createIdentifier('executeTests')
//     );
//
//     return ts.createCall(propertyAccess, undefined, [
//       ts.createIdentifier(functionName),
//       ts.createIdentifier('ut.generateArray')
//     ]);
//   }
//
//   return node;
// }

// function getFunctionName(node: ts.Node): ts.Node {
//   if (ts.isImportSpecifier(node)) {
//     functionName = node.getText().trim();
//   }
//
//   return node;
// }

// @ts-ignore
function transformAsExpression(node: ts.Node): ts.Node {
  if (ts.isAsExpression(node) && node.getText().startsWith('fixture as')) {
    const asExpression: string = node
      .getText()
      .replace('fixture as ut.', '')
      .replace('(', '')
      .replace(')', '');

    return ts.createRegularExpressionLiteral(`<${asExpression}>fixture`);
  }

  return node;
}

function transformPropertyAccess(node: ts.Node): ts.Node {
  if (ts.isPropertyAccessExpression(node) && hasIdentifier('ut', node)) {
    const method: string = getMethod(node);

    return ts.createRegularExpressionLiteral(method);
  }

  return node;
}

function hasIdentifier(str: string, node: ts.Node): boolean {
  const first: ts.Node = node.getChildAt(0);

  if (!first) {
    return false;
  }

  return first && ts.isIdentifier(first) && first.getText() === str;
}

function getMethod(node: ts.Node): string {
  const method: ts.Node = node
    .getChildren()
    .filter((n: ts.Node, i: number) => i > 0 && ts.isIdentifier(n))[0];

  if (!method) {
    return '';
  }

  methodNames.push(method.getText());

  return method.getText();
}

// @ts-ignore
function debugNode(node: ts.Node): void {
  // tslint:disable-next-line
  console.log(`Visiting: ${ts.SyntaxKind[node.kind]}. Text: ${node.getText()}`);
}
