/*
执行async函数，返回的是Promise对象
await相当于Promise的then
try...catch可捕获异常，代替了Promise的catch
*/
async function fn1() {
  return 100 //相当于 return Promise.resolve(100)
}
const res1 = fn1()
console.log('res1', res1);//async返回Promise对象
res1.then(data => {
  console.log('data', data);
})
//res1 Promise { 100 }
//data 100


// !(async function () {
//   const p1 = Promise.resolve(300)
//   const data = await p1//await相当于Promise then
//   console.log('data', data);
// })()
//data 300


//await相当于Promise的then
!(async function () {
  const p1 = Promise.resolve(300)
  const data = await p1 //await相当于Promise的then
  console.log('data', data);
})()
!(async function () {
  const data1 = await 400 //await Promise.resolve(400)
  console.log('data1', data1);
})()
!(async function () {
  const data2 = await fn1()
  console.log('data2', data2);
})()


!(async function () {
  const p4 = Promise.reject('err1') //rejected状态
  try {
    const res = await p4
    console.log(res);
  } catch (ex) {
    console.error(ex);//try...catch相当于Promise catch
  }
})()

!(async function () {
  const p4 = Promise.reject('err1') //rejected状态 不会往下执行了
  const res = await p4 //await相当于 then
  console.log('res', res);
})()

