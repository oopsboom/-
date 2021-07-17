//get请求
//为什么请求不到呢？？？？？？？？？？？？？？？？？？？？
const xhr = new XMLHttpRequest()
xhr.open('GET', './data/test.json', true) //true表示异步请求
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // console.log(
            //     JSON.parse(xhr.responseText) //变成json形式
            // )
            alert(xhr.responseText)
        } else if (xhr.status === 404) {
            console.log('404 not found')
        }
    }
}
xhr.send(null)

//post请求  此处代码无法请求 /login是请求的地址
// const xhr = new XMLHttpRequest()
// xhr.open('GET', "/login", false)
// xhr.onreadystatechange = function () {
//     //这里的函数异步执行
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             alert(xhr.responseText)
//         }
//     }
// }
// const postData = {
//     userName: 'zhangsan',
//     password: 'xxx'
// }
// xhr.send(JSON.stringify(postData))


