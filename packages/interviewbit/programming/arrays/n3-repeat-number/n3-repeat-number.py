# pylint: disable=missing-docstring

def n3RepeatNumber(array):
  l = len(array)
  count = {}

  for i in xrange(l):
    count[array[i]] = 1 + count.get(array[i], 0)

  result = -1
  for k, v in count.items():
    print(k, v)
    if v > l / 3:
      result = int(k)

  return result
