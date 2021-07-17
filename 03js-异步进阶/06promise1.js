const p1 = new Promise((resolve, reject) => {

})
console.log('p1', p1);//pending

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()  //fulfilled
  })
})
console.log('p2', p2);//pending
setTimeout(() => {
  console.log('setTimeout-resolve', p2);//fulfilled
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  })
})
console.log('p3', p3); //pending
setTimeout(() => {
  console.log('setTimeout-reject', p3); //rejected
})
