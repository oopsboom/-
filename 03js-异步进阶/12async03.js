async function fn2() {
  return new Promise(() => { })
}
console.log(fn2())

async function fn1() {
  return 100
}
console.log(fn1()) // 相当于 Promise.resolve(100)

//注意这个！！！
!(async function () {
  const p1 = new Promise(() => { })
  await p1
  console.log('p1') // 不会执行
})()

!(async function () {
  const p2 = Promise.resolve(100)
  const res = await p2
  console.log(res) // 100
})()

!(async function () {
  const res = await 100
  console.log(res) // 100
})()

//注意！！！
!(async function () {
  const p3 = Promise.reject('some err')
  const res = await p3
  console.log(res) // 不会执行
})()


!(async function () {
  const p4 = Promise.reject('some err')
  try {
    const res = await p4
    console.log(res)
  } catch (ex) {
    console.error(ex)
  }
})()