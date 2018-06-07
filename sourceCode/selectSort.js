const arr1 = [35,99,18,76,12];
// const arr1 =[];
// for(let i=0,len = arr.length-1;i<len;i++){
//     let temp,index;
//     temp = arr[i];
//     for(let j =0;j<arr.length;j++){
//         if(temp>arr[j]){
//             temp = arr[j];
//         }
//         arr1.push(temp);
//     }
// }
// console.log(arr1);

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
let arr2 = selectionSort(arr1);
console.log(arr2);