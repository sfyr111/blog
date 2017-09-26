function rank (key, arr, low, height) {
  if (low > height) return -1
  var mid = low + (height - low) / 2

  if (key < arr[mid]) return rank(key, arr, low, mid - 1)
  if (key > arr[mid]) return rank(key, arr, mid + 1, height)
  return mid
}
console.log(rank(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 10))
