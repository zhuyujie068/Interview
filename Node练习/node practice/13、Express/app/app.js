var createError = require('http-errors'); //http 相关的错误模块包
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//cookie
var logger = require('morgan');// 输出日志

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //视图设置
app.set('view engine', 'ejs');  //视图引擎设置

// express中间件
app.use(logger('dev')); //输出开发环境日志
app.use(express.json());//解析json数据
app.use(express.urlencoded({ extended: false }));//解析boby中的数据
app.use(cookieParser());//cookie解析
app.use(express.static(path.join(__dirname, 'public')));//处理静态文件（可以查看请求的路径在目录中有没有相应的静态文件，没有就进行路由匹配）

// 路由匹配
app.use('/', indexRouter);//渲染首页的路由 
app.use('/users', usersRouter);//渲染用户的路由

// 当没有找到相应的页面就会进行 404 报错
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // createError(404) 创建 404 错误（可用也可以自己做一个404页面显示）
});

// error handler
// 处理错误的中间件
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
