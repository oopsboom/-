async function async1() {
  console.log('async1 start')   // 2
  await async2() //执行，返回 Promise

  // await后面做回调内容,微任务
  console.log('async1 end')     // 6
}

async function async2() {
  console.log('async2')       // 3
}

console.log('script start')   // 1

setTimeout(function () { // 异步，宏任务
  console.log('setTimeout')     // 8
}, 0)

async1()

//初始化Promise时，传入的函数会立即执行
new Promise(function (resolve) {
  console.log('promise1')       // 4
  resolve()
}).then(function () { // 异步，微任务
  console.log('promise2')       // 7
})

console.log('script end')       // 5
//同步代码执行完毕(event loop -call stack被清空)
//执行微任务
//(尝试触发DOM渲染)
//触发Event loop，执行宏任务
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/