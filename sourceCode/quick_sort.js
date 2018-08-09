// 简单排序： 冒泡、选择、插入 时间复杂度都是 n^2
// 复杂排序： 快排、堆排、归并排序 时间复杂度都是 (log2^n)* n
// 分治
// 快排 log2(n)* n for循环 n次
  // 1. 随机选择一个数组中的一个数作为一个基准 一般是中点
  // 2. 其余数字跟他比较， 小的放左边 大的放右边
  // 3. 利用递归的思想， 将左右两边的数重复以上两步
function QuickSort(arr) {
  // 这里是出口 当数组长度小于等于1的时候结束递归
  if(arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length /2)
  // 把中间基准值从数组提出来
  pivot = arr.splice(pivotIndex, 1)[0]  // 选出相应位置的值
  console.log(pivot)
  let left = [], right = []
  for(let i = 0, len = arr.length ; i < len; i++) {
    if( arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return QuickSort(left).concat(pivot, QuickSort(right))
}
console.log(QuickSort([85, 24, 63, 45, 17, 31, 78, 56]))
