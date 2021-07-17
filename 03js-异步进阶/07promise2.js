//状态变化会触发 then catch
const p1 = Promise.resolve(100) //resolved ,执行then
p1.then(data => {
  console.log('data', data)
}).catch(err => {
  console.error('err', err)
})

const p2 = Promise.reject(300) //rejected，执行catch
p2.then(data => {
  console.log('data2', data)
}).catch(err => {
  console.error('err2s', err)
})
//data 100
//err2s 300
