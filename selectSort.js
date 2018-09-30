function selectSort(arr) {
    for (min = i = 0; i < arr.length - 1; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]///把每轮的第一个和当前轮的最小值交换位置
}

var arr = [10, 34, 21, 47, 3, 28]
sectionSort(arr)
console.log(arr)

/* 第一轮：从数组中找到最小的数字，和第一个数字交换位置

第二轮：从第二个数字开始，找到最小的数字，和第二个数字交换位置 */