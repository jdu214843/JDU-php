// let S = [2, 3, 1, 7];
// let arr = [
//     [2, 8, 6, 6, 1],
//     [2, 1, 3, 1, 1],
//     [1, 1, 3, 2, 2],
//     [1, 3, 2, 3, 2],
//     [2, 8, 3, 1, 3],
// ];
// function rawMaterial(array, array2) {
//     let ara = [];
//     for (let i = 0; i < array.length; i++) {
//         let row = [];
//         for (let j = 0; j < array2.length; j++) {
//             row.push(array[i][j] - array2[j]);
//         }
//         ara.push(finalWar(row));
//     }
//     return ara
// }
// function finalWar(array) {
//         let arer = []
//         for (let i = 0; i < array.length; i++) {
//             array[i] = Math.pow(array[i], 2);
//             arer[i] = array[i];
//         }
//         let total = 0;
//         for (let i = 0; i < arer.length; i++) {
//             total += arer[i]
//         }
//         return total
//         // [1]
// }
// function compareArrayItem(array) {
//     let i = 0;
//     let smaller = array[0];
//     while ( i < array.length) {
//         if (smaller > array[i])
//             smaller = array[i];
//         i++;
//     }
//     return smaller
// }
// let index = rawMaterial(arr, S).indexOf(compareArrayItem(rawMaterial(arr, S)));
// let last = arr[index].pop();
// console.log({min: Number(Math.sqrt(compareArrayItem(rawMaterial(arr, S, ))).toFixed(2)), last: last, index: index})

// let a = 12343545;
// let b=0;
// while (a >0){
//     b = a %10


//     console.log(b)
// }
let a=123456
let sum=0
let k=0
while (a>0){
     sum=sum+a%10
     k=a%10
     a=a-k
    a=a/10
}
   
console.log(sum)