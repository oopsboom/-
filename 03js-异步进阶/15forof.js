/*
for...in(以及forEach )是常规的同步遍历
for...of常用于异步的遍历
为什么运行不出来？？？
*/
function muti(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve => num * num
    }, 1000)
  })
}
const nums = [1, 2, 3]
nums.forEach(async (i) => {
  const res = await muti(i)
  console.log(res);
})
// !(async function () {
//   for (let i of nums) {
//     const res = await muti(i)
//     console.log(res);
//   }
// })()