function bubbleSort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
};

var arr=[1,4,8,5,0,3]
bubbleSort(arr)
console.log(arr)
/* 
 原理：

 选择第1个和第2个数字，如果第1个>第2个二者交换位置（假设是升序排列）。之后选择第2个和第3个数字，类似交换处理。一轮下来后，最大的数字会“冒泡”到最后一位。

 接下来，忽略已经排好的数字，对于剩下的数字再来一轮
 ...

直到所有的数字都排列完成。 */


/* 测试代码效率 */
let arr = randomArr(10000, 100)
console.time('bubleSort')
bubleSort(arr)
console.timeEnd('bubleSort')


function randomArr( arrLen = 100, maxValue = 1000 ) {
  let arr = []
  for(let i = 0; i < arrLen; i++) {
    arr[i] = Math.floor((maxValue+1)*Math.random())
  }
  return arr
}

function bubleSort(arr) {
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ] /*交换元素*/
      }
    }
  }
}