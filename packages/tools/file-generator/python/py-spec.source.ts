import { SourceFn } from '../type';

import { pascalize, snakelize } from '../../utils/string.util';

const pySpecSource: SourceFn = ({ problem, functionName }) => {
  return `# pylint: disable=missing-docstring
import os
import unittest
import json
import importlib

dirName = os.path.dirname(__file__)
${functionName} = importlib.import_module('${snakelize(
    problem
  )}').${functionName}

# UNIT TEST DO NOT EDIT
def printTestCase(testFunction, testCase, assertEqual):
  testInput = testCase['input']
  testOutput = testCase['output']
  print 'it should return {testOutput} for input {testInput}'.format(
    testOutput=testOutput, testInput=testInput)
  assertEqual(testFunction(testInput), testOutput)

class Test${pascalize(problem)}(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    with open(dirName + '/${problem}.fixture.json') as jsonData:
      cls.fixture = json.load(jsonData)

  def test(self):
    print 'Example Tests:'
    for testCase in self.fixture['exampleTests']:
      printTestCase(${functionName}, testCase, self.assertEqual)

    print 'Correctness Tests:'
    for testCase in self.fixture['correctnessTests']:
      printTestCase(${functionName}, testCase, self.assertEqual)
# UNIT TEST ENDS`;
};

export { pySpecSource };
