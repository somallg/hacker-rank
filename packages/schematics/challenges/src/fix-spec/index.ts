import { Rule, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

import { Schema as FixSpecOptions } from './schema';

export { fixSpec };

const printer = ts.createPrinter();
const IMPORT_CHALLENGES = '@challenges/util';
const FUNC_NAME = 'createTestExecutor';

let functionName = '';
let asExpression = '';

function fixSpec(options: FixSpecOptions): Rule {
  const { directory } = options;

  return (tree: Tree) => {
    tree.getDir(directory).visit(filePath => {
      if (!filePath.endsWith('.spec.ts')) {
        return;
      }

      const fileContent = tree.read(filePath);
      if (!fileContent) {
        return;
      }

      const sourceFile = ts.createSourceFile(
        filePath,
        fileContent.toString(),
        ts.ScriptTarget.ESNext,
        true
      );

      const result = ts.transform(
        sourceFile,
        [
          transformImportDeclaration,
          getFunctionName,
          getAsExpression,
          transformParenExpression
        ].map(createTransformer)
      );

      const transformedSourceFile = result.transformed[0];

      tree.overwrite(
        filePath,
        printer.printFile(transformedSourceFile as ts.SourceFile)
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

    function transform(rootNode: T) {
      return ts.visitNode(rootNode, visit);
    }

    function visit(node: T): T {
      // console.log(`Visiting ${ts.SyntaxKind[node.kind]}`, node.getText(), '\n');
      const newNode = fn(node);
      if (newNode !== node) {
        return newNode;
      }

      return ts.visitEachChild(node, visit, context);
    }
  }
}

function transformImportDeclaration(node: ts.Node): ts.Node {
  if (ts.isImportDeclaration(node)) {
    const moduleSpecifier = (node as ts.ImportDeclaration).moduleSpecifier.getText();
    if (moduleSpecifier.includes(IMPORT_CHALLENGES)) {
      return ts.createImportDeclaration(
        undefined,
        undefined,
        ts.createImportClause(
          undefined,
          ts.createNamespaceImport(ts.createIdentifier('ut'))
        ),
        ts.createStringLiteral(IMPORT_CHALLENGES)
      );
    }
  }

  return node;
}

function transformParenExpression(node: ts.Node): ts.Node {
  if (
    ts.isCallExpression(node) &&
    node.getText().indexOf(`describe('${functionName}'`) === 0
  ) {
    const functionCall = ts.createCall(
      ts.createIdentifier(`ut.${FUNC_NAME}`),
      undefined,
      [ts.createIdentifier(asExpression)]
    );

    const propertyAccess = ts.createPropertyAccess(
      functionCall,
      ts.createIdentifier('executeTests')
    );

    return ts.createCall(propertyAccess, undefined, [
      ts.createIdentifier(functionName),
      ts.createIdentifier('ut.generateArray')
    ]);
  }

  return node;
}

function getFunctionName(node: ts.Node): ts.Node {
  if (ts.isImportSpecifier(node)) {
    functionName = node.getText().trim();
  }

  return node;
}

function getAsExpression(node: ts.Node): ts.Node {
  if (
    ts.isParenthesizedExpression(node) &&
    node.getText().includes('fixture as')
  ) {
    asExpression = node
      .getText()
      .replace('(', '')
      .replace(')', '')
      .replace('Fixture', 'ut.TestFixture');
  }

  return node;
}
