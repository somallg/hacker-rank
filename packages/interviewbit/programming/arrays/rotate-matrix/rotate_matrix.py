# pylint: disable=missing-docstring,line-too-long

def rotateMatrix(matrix):
  n = len(matrix)

  for i in xrange(n - 1):
    for j in xrange(i, n - i - 1):
      matrix[j][n - i - 1], matrix[n - i - 1][n - j - 1], matrix[n - j - 1][i], matrix[i][j] = matrix[i][j], matrix[j][n - i - 1], matrix[n - i - 1][n - j - 1], matrix[n - j - 1][i]

  return matrix
