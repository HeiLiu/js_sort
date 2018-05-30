// 传统的排序 桶排序
// 思想： 利用数组的下标是有序的,待排序的数字大小在下标的范围内，当数组下标等于要排序的数组时
// 当下标等于待排序的数字大小 即输出下标 相当于输出较小的数字
const arr1 = new Array(100);
const arr2 = [35,18, 99, 18, 76, 12];

function sort() {
    const arr = [];
    const bucket =[];
    // 初始化100个桶
    for(let i = 0;i<100;i++){
        bucket[i] =0;
    }
    // 用待排序的数字做桶的下标 给相应项+1 做标记样的
    for(let i =0;i<arr2.length;i++){
        const item = arr2[i];
        bucket[item]+=1;
        // 给数字的对应下标的值+1
    }
    // console.log(a); 
    for(let i =0;i<bucket.length;i++){
        // 循环桶数组 从有值的桶中
        if(bucket[i]>=0){// a[12] =1
            for(let j =0;j<bucket[i];j++){
                arr.push(i);
                console.log(arr);
            }
        }
    }
    return arr;
}
const sorted_arr = sort();
console.log(sorted_arr);
//  最开始我关于桶排序的想法 实现代码 
// for (let i = 0; i < arr1.length; i++) {
//     // 为什么要填充0？
//     arr1[i] = 0;
//     for (let j = 0; j < arr2.length; j++) {
//         if (i == arr2[j]) {
//             console.log(i);
//         }
//     }
// }