const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#container')
  .append($p1)
  .append($p2)
  .append($p3)

//微任务：DOM渲染前触发
Promise.resolve().then(() => {
  console.log('length1', $('#container').children().length);
  alert('Promise then') //DOM渲染了吗？ no
})
//宏任务：DOM渲染后触发
setTimeout(() => {
  console.log('length2', $('#container').children().length);
  alert('setTimeout')//DOM渲染了吗? yes
})
