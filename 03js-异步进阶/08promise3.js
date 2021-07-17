/*
then正常返回resolved，里面有报错则返回rejected
  catch正常返回resolved，里面有报错则返回rejected
*/
// const p1 = Promise.resolve().then(() => {
//   return 100
// })
// console.log('p1', p1);

// const p2 = Promise.resolve().then(() => {
//   throw new Error('then error')
// })
// console.log('p2', p2);

const p3 = Promise.reject('my error').catch(error => {
  console.error(error);
})
console.log('p3', p3); //resolved注意！触发then回调
p3.then(() => {
  console.log(100);
})

const p4 = Promise.reject('my error').catch(err => {
  throw new Error('catch err')
})
console.log('p4', p4);//rejected 触发catch回调
p4.then(() => {
  console.log(300);
}).catch(() => {
  console.log('some error');
})