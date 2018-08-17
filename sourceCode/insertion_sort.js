// 2 1 5 6 3 8 9 扑克牌
// 1 2 3 5 6 8 9
// 插入的动作 把2 插入到 1 后面
// 插入的位置 m m > 0 即从第二个开始
// 把 m 位置的牌， 跟 0~m-1 之间的牌进行比较 如果小于其中一个就交换位置
// 0~m-1 一定是有序的 注意的是插入的位置
function insertionSort(array) {
  　　console.time('插入排序耗时：');
  　　for (var i = 1; i < array.length; i++) {
  　　　　var key = array[i];
  　　　　var j = i - 1;
  　　　　while ( array[j] > key) {
  　　　　　　array[j + 1] = array[j];
  　　　　　    j--;
  　　　　}
  　　　　array[j + 1] = key;
  　　}
  　　console.timeEnd('插入排序耗时：');
  　　return array;
  }
  
  var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
  console.log(insertionSort(arr));

