# pylint: disable=missing-docstring
import os
import unittest
import json
import importlib

dirName = os.path.dirname(__file__)
matrixSearch = importlib.import_module('matrix_search').matrixSearch

# UNIT TEST DO NOT EDIT
def printTestCase(testFunction, testCase, assertEqual):
  testInput = testCase['input']
  [matrix, target] = testInput
  testOutput = testCase['output']
  print 'it should return {testOutput} for input {testInput}'.format(
    testOutput=testOutput, testInput=testInput)
  assertEqual(testFunction(matrix, target), testOutput)

class TestMatrixSearch(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    with open(dirName + '/matrix-search.fixture.json') as jsonData:
      cls.fixture = json.load(jsonData)

  def test(self):
    print 'Example Tests:'
    for testCase in self.fixture['testCategories'][0]['testCases']:
      printTestCase(matrixSearch, testCase, self.assertEqual)

    print 'Correctness Tests:'
    for testCase in self.fixture['testCategories'][1]['testCases']:
      printTestCase(matrixSearch, testCase, self.assertEqual)
# UNIT TEST ENDS`;
