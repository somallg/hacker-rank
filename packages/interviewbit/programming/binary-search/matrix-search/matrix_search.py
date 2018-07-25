# pylint: disable=missing-docstring

def matrixSearch(matrix, target):
  m = len(matrix)
  if m == 0:
    return 0

  n = len(matrix[0])
  start = 0
  end = m * n - 1

  while start <= end:
    middle = (start + end) // 2
    row = middle // n
    col = middle % n
    if matrix[row][col] < target:
      start = middle + 1
    elif matrix[row][col] > target:
      end = middle - 1
    else:
      return 1

  return 0
