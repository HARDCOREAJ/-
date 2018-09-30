function insertingSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                arr.splice(j,0,arr[i])
                arr.splice[arr[i+1],1]
                break//跳出循环
            }
        }
    }
}
var arr = [10, 34, 21, 47, 3, 28]
insertionSort(arr)
console.log(arr)
/* 
从第一个元素开始，该元素可以认为已经被排序
取出下一个元素，在已经排序的元素序列中从后向前扫描
把取出的元素放到已排序的元素中间的合适位置
重复步骤2~3 */