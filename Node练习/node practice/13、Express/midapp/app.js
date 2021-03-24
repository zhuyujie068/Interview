var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置了模版文件夹的路径；主要清楚__dirname的意思就可以了，它是node.js中的全局变量，表示取当前执行文件的路径
app.set('view engine', 'ejs'); //设置使用的模版引擎，我们使用的ejs

app.use(express.urlencoded({
  extended: false
})); //解析body函数 （使 req 中一个 boby 方法：req.boby）
app.use(express.static(path.join(__dirname, 'public'))); //设置静态页面的函数

// 添加应用层中间件(可以用来处理 req 和 res 响应)
app.use((req, res, next) => {
  console.log('访问任何页面之前，此函数都会被调用')
  next()
})

app.get('/', (res, req) => {
  req.send('这是首页')
})


//路由中间件 
let router=require('./routes/mall') //引入 mall 路由

app.use('/mall', router) // 路径 mall 下面的就去访问 router






module.exports = app;