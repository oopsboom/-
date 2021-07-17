//重要
// async function fn() {
//   return 100
// }
// (async function () {
//   const a = fn() // ??               // promise
//   const b = await fn() // ??         // 100
//   console.log(a);
//   console.log(b);
// })()


!(async function () {
  console.log('start')
  const a = await 100
  console.log('a', a)
  const b = await Promise.resolve(200)
  console.log('b', b)
  const c = await Promise.reject(300) //c报错，往后不执行
  console.log('c', c)
  console.log('end')
})() // 执行完毕，打印出那些内容？
/*
start
a 100
b 200
c报错，往后不执行
*/


console.log(100)
setTimeout(() => {
  console.log(200)
})
Promise.resolve().then(() => {
  console.log(300)
})
console.log(400)
// 100 400 300 200


async function async1() {
  console.log('async1 start')
  await async2() // 这一句会同步执行，返回 Promise ，其中的 `console.log('async2')` 也会同步执行
  console.log('async1 end') // 上面有 await ，下面就变成了“异步”，类似 cakkback 的功能（微任务）
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () { // 异步，宏任务
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) { // 返回 Promise 之后，即同步执行完成，then 是异步代码
  console.log('promise1') // Promise 的函数体会立刻执行
  resolve()
}).then(function () { // 异步，微任务
  console.log('promise2')
})

console.log('script end')

// 同步代码执行完之后，屡一下现有的异步未执行的，按照顺序
// 1. async1 函数中 await 后面的内容 —— 微任务
// 2. setTimeout —— 宏任务
// 3. then —— 微任务