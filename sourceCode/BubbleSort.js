// 冒泡排序 
// 思想: 比较相邻的元素。如果第一个比第二个大，就交换两数顺序  
const source_arr = [35,18, 99, 18, 76, 12];
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                let temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(source_arr));