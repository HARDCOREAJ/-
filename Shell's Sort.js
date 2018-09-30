/* 先将整个待排数组分割成若干个子数组（由相隔某个“增量”的元素组成的）分别进行直接插入排序，
然后依次缩减增量再进行排序，待整个数组中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序。
因为直接插入排序在元素基本有序的情况下效率是很高的，因此希尔排序在时间效率上较大提高。 */

function shellSort(arr) {
    var temp
    var len = arr.length
    for (var gap = len >> 1; gap > 0; gap = gap >>=1) {
      for (var i = gap; i < len; i++) {
        temp = arr[i]
        //console.log(i)
        for( j = i - gap; j >=0 && arr[j] > temp; j -= gap) {
          arr[j + gap] = arr[j]
        }
        arr[j + gap] = temp
      }
      console.log(arr)
    }
  }

var arr = [3, 1, 7, 2, 5, 0, 4, 6]
shellSort(arr)
console.log(arr)