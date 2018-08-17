function binaryInsertionSort(array) {
  　　console.time('二分插入排序耗时：');
  　　for (var i = 1; i < array.length; i++) {
  　　　　var key = array[i], left = 0, right = i - 1;
  　　　　while (left <= right) {
  　　　　　　var middle = parseInt((left + right) / 2);
  　　　　　　if (key < array[middle]) {
  　　　　　　　　right = middle - 1;
  　　　　　　} else {
  　　　　　　　　left = middle + 1;
  　　　　　　}
  　　　　}
  　　　　for (var j = i - 1; j >= left; j--) {
  　　　　　　array[j + 1] = array[j];
  　　　　}
  　　　　array[left] = key;
  　　}
  　　console.timeEnd('二分插入排序耗时：');
  　　return array;
  }
  var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
  console.log(binaryInsertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];