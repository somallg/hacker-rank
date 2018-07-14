# pylint: disable=missing-docstring

def haveZeroInFirstRow(matrix):
  for i in xrange(len(matrix[0])):
    if matrix[0][i] == 0:
      return True
  return False


def setAllZeroInFirstRow(matrix):
  for i in xrange(len(matrix[0])):
    matrix[0][i] = 0
  return matrix


def haveZeroInFirstColumn(matrix):
  for i in xrange(len(matrix)):
    if matrix[i][0] == 0:
      return True
  return False


def setAllZeroInFirstColumn(matrix):
  for i in xrange(len(matrix)):
    matrix[i][0] = 0
  return matrix

def setInfoInFirstRowAndFirstColumn(matrix):
  for row in xrange(1, len(matrix)):
    for col in xrange(1, len(matrix[row])):
      if matrix[row][col] == 0:
        matrix[0][col] = 0
        matrix[row][0] = 0
  return matrix

def setMatrixZeros(matrix):
  zeroInFirstRow = haveZeroInFirstRow(matrix)
  zeroInFirstColumn = haveZeroInFirstColumn(matrix)
  matrix = setInfoInFirstRowAndFirstColumn(matrix)

  for row in xrange(1, len(matrix)):
    for col in xrange(1, len(matrix[row])):
      matrix[row][col] = 1 if matrix[0][col] == 1 and matrix[row][0] == 1 else 0

  if zeroInFirstRow:
    matrix = setAllZeroInFirstRow(matrix)

  if zeroInFirstColumn:
    matrix = setAllZeroInFirstColumn(matrix)

  return matrix
