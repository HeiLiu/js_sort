// n^2
// 找到数组中最小的值放在第一位，第二小的放在第二位...
// 基址查询
function SelectSort(arr) {
  let len = arr.length
  for(let i = 0; i < len; i++) {
    let minIndex = i
    // 如果已经选择了， 前面的就一定是有序的
    for( let j = i; j < len; j++) {
      if( arr[j] < arr[minIndex]) {
        minIndex = j
        console.log(i, j)
      }
    }
    if(minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }
  return arr
}
console.log(SelectSort([45,21,45,12,56,12,67,32,98]))
