# pylint: disable=missing-docstring

def swapBetweenIndexes(startIndex, endIndex, array):
  middleIndex = (endIndex - startIndex) >> 1
  for i in xrange(middleIndex + 1):
    array[startIndex + i], array[endIndex - i] = array[endIndex - i], array[startIndex + i]

  return array

def getSwapIndex(array, preSuffixIndex):
  l = len(array)
  for i in xrange(l - 1, preSuffixIndex, -1):
    if array[i] > array[preSuffixIndex]:
      return i

  return -1

def nextPermutation(array):
  l = len(array)
  if l < 2:
    return array

  preSuffixIndex = l - 2
  while preSuffixIndex >= 0 and array[preSuffixIndex] >= array[preSuffixIndex + 1]:
    preSuffixIndex = preSuffixIndex - 1

  if preSuffixIndex == -1:
    array.reverse()
    return array

  swapIndex = getSwapIndex(array, preSuffixIndex)
  array[preSuffixIndex], array[swapIndex] = array[swapIndex], array[preSuffixIndex]

  return swapBetweenIndexes(preSuffixIndex + 1, l - 1, array)
