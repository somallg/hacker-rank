# pylint: disable=missing-docstring
import os
import unittest
import json
import importlib

dirName = os.path.dirname(__file__)
rotatedSortedArraySearch = importlib.import_module('rotated_sorted_array_search').rotatedSortedArraySearch

# UNIT TEST DO NOT EDIT
def printTestCase(testFunction, testCase, assertEqual):
  testInput = testCase['input']
  testOutput = testCase['output']
  print 'it should return {testOutput} for input {testInput}'.format(
    testOutput=testOutput, testInput=testInput)
  assertEqual(testFunction(testInput[0], testInput[1]), testOutput)

class TestRotatedSortedArraySearch(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    with open(dirName + '/rotated-sorted-array-search.fixture.json') as jsonData:
      cls.fixture = json.load(jsonData)

  def test(self):
    print 'Example Tests:'
    for testCase in self.fixture['testCategories'][0]['testCases']:
      printTestCase(rotatedSortedArraySearch, testCase, self.assertEqual)

    print 'Correctness Tests:'
    for testCase in self.fixture['testCategories'][1]['testCases']:
      printTestCase(rotatedSortedArraySearch, testCase, self.assertEqual)
# UNIT TEST ENDS`;
