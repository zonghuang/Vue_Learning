/**
 * filter() 函数：filter中的回调函数有一个要求 —— 必须返回一个 booblean 值
 *     true: 函数内部会自动将这次回调的 n 加入到新的数组中
 *     false: 函数内部会过滤掉这次的 n
 */

/**  需求和步骤
 * 1. 取出所有小于100的数字
 * 2. 将所有小于100的数字进行转化 —— 全部乘以 2
 * 3. 将所有数字相加,得到最终的结果
 */
/****** 方法一：使用 for 循环遍历 ****/
// const  nums = [10, 20, 111, 222, 444, 40, 50]
//
// let newNums1 = []
// for (let n of nums) {
//   if (n < 100) {
//     newNums1.push(n)
//   }
// }
// console.log(newNums1);    // [ 10, 20, 40, 50 ]
//
// let newNums2 = []
// for (let n of newNums1) {
//   newNums2.push(n * 2)
// }
// console.log(newNums2);    // [ 20, 40, 80, 100 ]
//
// let total = 0
// for (let n of newNums2) {
//   total += n
// }
// console.log(total);       // 240

/***** 方法二 使用高阶函数：filter()、map()、reduce() ****/
// const nums = [10, 20, 111, 222, 444, 40, 50]
//
// let newNums1 = nums.filter(function (n) {
//   return n < 100
// })
// console.log(newNums1)    // [ 10, 20, 40, 50 ]
//
// let newNums2 = newNums1.map(function (n) {
//   return n * 2
// })
// console.log(newNums2)    // [ 20, 40, 80, 100 ]
//
// let total = newNums2.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
// console.log(total)    // 240

// 第一次: preValue 0 n 20
// 第二次: preValue 20 n 40
// 第三次: preValue 60 n 80
// 第四次: preValue 140 n 100
// 最后:   preValue + n （输出 240）

/***** 方法三 使用高阶函数：filter()、map()、reduce()、链式编程 ****/
const nums = [10, 20, 111, 222, 444, 40, 50]

let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total) // 240

/***** 方法三 使用高阶函数：filter()、map()、reduce()、链式编程、箭头函数 ****/
const nums = [10, 20, 111, 222, 444, 40, 50]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total) // 240
