# pylint: disable=missing-docstring

def findPermutation(param):
  s, n = param
  array = []
  for i in xrange(n + 1):
    array.append(i)
  result = []

  l = 1
  r = n
  for c in s:
    if c == 'D':
      result.append(array[r])
      r = r - 1
    else:
      result.append(array[l])
      l = l + 1

  result.append(array[min(l, r)])

  return result
