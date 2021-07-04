const arr = [3, 2, 2, 7, 8];
const swap = (i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const partition = (l, h) => {

  const pivot = arr[l];
  let i = l, j = h;

  while (i < j) {
    i = i + 1;
    while (arr[i] <= pivot) { i++; }
    while (arr[j] > pivot) { j--; }
    if (i < j) {
      swap(i, j);
    }
  }

  swap(l, j);
  return j;
}

const QuickSort = (l, h) => {
  if (l < h && arr[l] !== arr[h]) {
    const pivot = partition(l, h);
    QuickSort(l, pivot);
    QuickSort(pivot + 1, h);
  }
}
QuickSort(0, arr.length - 1);
console.log(arr);