/*
left : [1, 3, 4, 7]
right: [2, 5, 6, 9]
result: [1, 2, 3, 4, 5, 6, 7, 9]
 */

function mergeSort(arr) {
  var merge = function(left, right) {
    var result = []
    while(left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift())
    }
    return result.concat(left.concat(right))
  }
  if(arr.length < 2) return arr
  var mid = arr.length >> 1
  return merge(mergeSort(this.slice(0, mid)), mergeSort(this.slice(mid)))
}

/* 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
设定两个指针，最初位置分别为两个已经排序序列的起始位置
比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
重复步骤3直到某一指针到达序列尾
将另一序列剩下的所有元素直接复制到合并序列尾 */