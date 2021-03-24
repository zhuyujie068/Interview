let express = require('express');

let app = express();

// 一、字符串路径
app.get('/', (req, res) => {
  res.send('这是首页')
})

// 二、字符串模式路径（类似正则）
app.get('/ab?cd', (req, res) => {  // b?   和 正则 匹配格式一样 b 可有可无（匹配2个路径 abcd、acd）
  res.send('这是abcd/acd')
})

app.get('/ab+cd',(req,res)=>{  // b+  至少有一个 b  (匹配 abcd、abbbcd ...)
  res.send('ab+cd')
})

//   /ab*cd , 必须以ab开头，cd结尾，中间可以有任意字符


// 三、正则表达式路径
app.get('/a/',(req,res)=>{
  res.send('正则表达式匹配')
})


// 四、动态路由
// 路由参数被命名为URL段，用于捕获UPL中在其位置处指定的值。捕获的值将填充到 req.params 对象中，并将路径中指定的 route 参数的名称作为其各自的键
// 要使用路由参数定义路由，只需在路由路径中指定路由参数
app.get('/users/:userId',(req,res)=>{ // http://172.30.1.254:3000/users/7665767
  res.send('userId',req.params) //可以根据userId获取相应的数据


  // res.download()//提示要下载的文件
  // res.end()//结束响应过程
  // res.json()//发送JON响应
  // res.jsonp()//发送带有JSONP支持的JON响应
  // res.redirect()//重定向请求
  // res.render()//渲染视图模板
  // res.send()//发送各种类型的响应
  // res.sendFile()//将文件作为八位字节流发送
  // res.sendStatus()//设置响应状态码，并将字符串形式发送为响应正文

})

//  /users/a:userId  =>  http://172.30.1.254:3000/users/a7665767

//  /users/a:userId/typeId  =>  http://172.30.1.254:3000/users/a7665767/1324


module.exports = app