function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let leftArr = []
  let rightArr = []
  for (i = 1; i < arr.length; i++) {
    if(arr[i]>=arr[0]){
      rightArr.push(arr[i])
    }else{
      leftArr.push[arr[i]]
    }
  }
  return quickSort(leftArr).concat(arr[0]).concat(quickSort(rightArr))
}

/* 从数列中挑出一个元素，称为“基准”，
重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。
递归到最底部时，数列的大小是零或一，也就是已经排序好了。这个算法一定会结束，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。 */


//优化
function quickSort(arr) {
  function _quickSort(arr, start, end) {
    if (start >= end) return
    let key = arr[end]
    let left = start, right = end - 1
    while (left < right) {
      while (arr[left] < key && left < right) left++
      while (arr[right] >= key && left < right) right--
      [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    if (arr[left] >= arr[end]) {
      [arr[left], arr[end]] = [arr[end], arr[left]]
    } else {  // 如 [2, 1, 3, 4]
      left++
    }
    _quickSort(arr, start, left - 1)
    _quickSort(arr, left + 1, end)
  }
  _quickSort(arr, 0, arr.length - 1)
  return arr
}

/* 对于一个数组，挑选最后一个值作为参考值(key)
从数组的头部开始扫描，如果值比参考值小，继续往后扫描，直到扫描到的值(左值)比参考值大
从数组的尾部(参考值的前一个)开始扫描，如果值比参考值大，继续往前扫描，直到扫描到的值(右值)比参考值小
此时交换扫描停止时的这两个值
继续上面的逻辑，直到左值和右值相遇
如果相遇时的值大于等于参考值，让参考值和相遇值调换位置(一般情况)
如果相遇时的值小于参考值，不调换，但 left 后移以为 (特殊情况，如 [2, 1, 3, 4, 5])
讲过上面的处理后，就会把数组变成以原数组末尾数字为分割（左边都比它小，右边都比它大）的数组。然后分别对参考值左侧和右侧通过类似的逻辑继续处理。 */