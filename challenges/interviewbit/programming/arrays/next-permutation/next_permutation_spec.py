# pylint: disable=missing-docstring
import os
import unittest
import json
import importlib

dirName = os.path.dirname(__file__)
nextPermutation = importlib.import_module('next_permutation').nextPermutation

# UNIT TEST DO NOT EDIT
def printTestCase(testFunction, testCase, assertEqual):
  testInput = testCase['input']
  testOutput = testCase['output']
  print 'it should return {testOutput} for input {testInput}'.format(
    testOutput=testOutput, testInput=testInput)
  assertEqual(testFunction(testInput), testOutput)

class TestNextPermutation(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    with open(dirName + '/next-permutation.fixture.json') as jsonData:
      cls.fixture = json.load(jsonData)

  def test(self):
    print 'Example Tests:'
    for testCase in self.fixture['exampleTests']:
      printTestCase(nextPermutation, testCase, self.assertEqual)

    print 'Correctness Tests:'
    for testCase in self.fixture['correctnessTests']:
      printTestCase(nextPermutation, testCase, self.assertEqual)
# UNIT TEST ENDS
