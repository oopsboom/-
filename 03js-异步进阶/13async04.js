//只要遇到了 await ，后面的代码都相当于放在 callback 里。

async function async1() {
  console.log('async1 start') //2
  await async2()
  //await的后面，都可以看作是callback里的内容，即异步
  //类似event loop,setTimeout(cb1)    
  //Promise.resolve().then(()=>{ console.log('async1 end')})
  console.log('async1 end') // 5 关键在这一步，它相当于放在 callback 中，最后执行
}

async function async2() {
  console.log('async2')    //3
}

console.log('script start')  //1
async1()
console.log('script end')   //4 到此，同步代码执行完，执行异步代码(await后面)
/*
script start
async1 start
async2
script end
async1 end
*/