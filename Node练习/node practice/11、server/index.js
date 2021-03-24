let LcApp = require('./lcApp')

let app = new LcApp()

app.on('/', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end('这是首页')
})

app.on('/gnxw', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    if (req.pathObj.base == 'index') {
        res.end('这是国内新闻首页')
    } else {
        res.end('这是国内新闻其他页面')
    }
})

app.run(80, () => {
    console.log('服务器已启动：', 'http://172.30.1.254')
})













// let http = require('http');

// // 创建server服务器对象
// let server = http.createServer()

// // 监听对当前服务器对象的请求
// server.on('request',(req,res)=>{
//     // 当前服务器被请求时，会触发请求事件，并传入请求对象和响应对象
//     res.end('hello world')
// })

// // 服务器监听的端口号
// server.listen(3000,()=>{
//     // 启动监听端口号成功时触发
//     console.log("服务器启动成功！")
// })