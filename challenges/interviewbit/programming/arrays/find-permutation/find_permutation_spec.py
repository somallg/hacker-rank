# pylint: disable=missing-docstring
import os
import unittest
import json
import importlib

dirName = os.path.dirname(__file__)
findPermutation = importlib.import_module('find_permutation').findPermutation

# UNIT TEST DO NOT EDIT
def printTestCase(testFunction, testCase, assertEqual):
  testInput = testCase['input']
  testOutput = testCase['output']
  print 'it should return {testOutput} for input {testInput}'.format(
    testOutput=testOutput, testInput=testInput)
  assertEqual(testFunction(testInput), testOutput)

class TestFindPermutation(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    with open(dirName + '/find-permutation.fixture.json') as jsonData:
      cls.fixture = json.load(jsonData)

  def test(self):
    print 'Example Tests:'
    for testCase in self.fixture['exampleTests']:
      printTestCase(findPermutation, testCase, self.assertEqual)

    print 'Correctness Tests:'
    for testCase in self.fixture['correctnessTests']:
      printTestCase(findPermutation, testCase, self.assertEqual)
# UNIT TEST ENDS