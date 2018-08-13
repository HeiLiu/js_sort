let arr = [2, 3, 1, 4, 6]
function mergeSort(arr) {
  return main(arr)
  function main(arr) {
    // 对数组经行分割
    if(arr.length === 1) return arr
    // 向下取整
    // console.log(Math.floor(arr.length/2))
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)// 切到末尾
    return merge(main(left), main(right))
  }
  // 
  function merge(left, right) {
    console.log(left, right)
    // 最简单的两数相比，swap
    // 四个数 [排好序的左边], [排好序的右边]
    // 添加 i, j 两个计数器给左右两边 在进行比较 把小的放入新的数组中
    // 用新的 c[] 保存合并以后的数组
    let il = rl = 0,
      result = [];
    while(il < left.length && rl < right.length) {
      if(left[il] < right[rl]) {
        // 将小的一项保存到合并的结果数组中， 并且将指针后移
        // result.push(left[il++])
        result.push(left[il])
        left.splice(il, 1)
        il++
      } else {
        // result.push(right[rl++])
        result.push(right[rl])
        right.splice(rl, 1)
        rl++
      }
    }
    // 将左右两边已经添加到归并结果数组的元素删掉
    // return result.concat(left.slice(il)).concat(right.slice(rl))
    return result.concat(left.concat(right))
  }
}
console.log("排序后的数组：" ,mergeSort(arr))

arr = mergeSort(arr)
let result = 0
for(let i = 1; i < arr.length; i++) {
  let diff = arr[i] - arr[i-1]
  if(result < diff) {
    result = diff
  }
  // console.log(i)
}

console.log(result)