# pylint: disable=missing-docstring

def searchPivot(array):
    l = len(array)
    start = 0
    end = l - 1
    while start <= end:
        middle = (start + end) / 2
        if array[middle] <= array[l - 1]:
            end = middle - 1
        else:
            start = middle + 1
    return start

def rotatedSortedArraySearch(array, target):
    l = len(array)
    pivot = searchPivot(array)
    start = 0
    end = 0
    if pivot > 0 and target >= array[0]:
        start = 0
        end = pivot
    else:
        start = pivot
        end = l - 1

    while start <= end:
        middle = (start + end) / 2
        if array[middle] < target:
            start = middle + 1
        elif array[middle] > target:
            end = middle - 1
        else:
            return middle

    return -1;
