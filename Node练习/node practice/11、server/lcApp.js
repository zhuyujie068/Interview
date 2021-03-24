/**
 * 封装服务器
 */
let http = require('http');
let path = require('path');
let url = require('url');

class LcApp {

    // 构造函数
    constructor() {
        // 创建server服务器对象
        this.server = http.createServer()

        // 定义一个对象来存放url和他得回调函数，在调用on得使用，根据url来调用函数
        this.reqEvent = {}

        // 监听对当前服务器对象的请求
        this.server.on('request', (req, res) => {
            // 解析路径
            let pathObj = path.parse(req.url)
            console.log(pathObj) // 解析路径，比如 "/"  { root: '/', dir: '/', base: '', ext: '', name: '' }

            // 查看该路径是否有相应的事件
            if (pathObj.dir in this.reqEvent) {
                // 把路径后面得传给下面req
                req.pathObj = pathObj
                this.reqEvent[pathObj.dir](req, res)
            } else {
                res.setHeader("content-type", "text/html;charset=utf-8")
                res.end("<h1>404!页面找不到</h1>")
            }
        })
    }

    on(url, fu) {
        this.reqEvent[url] = fu;
    }

    run(port, callback) {
        // 服务器监听的端口号
        this.server.listen(port, callback)
    }
}

module.exports = LcApp;