//创建10个a标签，点击的时候弹出来对应的序号 
//不论点哪个，弹出都是10
// let i, a
// for (i = 0; i < 10; i++) {
//     a = document.createElement('a')
//     a.innerHTML = i + '<br>'
//     a.addEventListener('click', function (e) {
//         e.preventDefault()
//         alert(i)
//     })
//     document.body.appendChild(a)
// }


//改进 弹出0 1 2
let a
//注意这个地方i=0必须let 不然还是10
for (let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}
