// log2(n)
function QuickSort (arr) {
  if(arr.length <= 1) {
    return arr
  }
  // 找一个基准点  取中间的数
  var num = Math.floor(len/2)
  // 从数组中把基准点拿出来
  var numValue = arr.splice(num, 1)[0]
  var left = [], right =[]
  for(var i = 0, len = arr.length; i< len; i++ ) {
    if(arr[i] < numValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // 返回一个递归 并且把每次排好序的两部分和基准点拼接
  return QuickSort(left).concat(numValue, QuickSort(right))
}

console.log(QuickSort([12, 4, 76, 34, 64, 33, 22]))