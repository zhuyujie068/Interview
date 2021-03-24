/**
 *  fs.createWriteStream
 *  写入流（就是可以一点点写入，像水流一样）, 并始终追加数据到文件的末尾
 *  http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options
 */

let fs = require('fs')

// 1、创建写入流
let ws = fs.createWriteStream('hello.txt', {
    flags: 'w',
    encoding: "utf-8"
})

console.log(ws)


// -----------------  监听事件  ---------------------


// 监听文件打开事件
ws.on('open', () => {
    console.log('文件打开')
})

// 监听准备事件（很少用）
ws.on("ready", () => {
    console.log("文件准备开始写入")
})

// 监听文件关闭事件
ws.on("close", () => {
    console.log("文件关闭")
})


// -----------------  开始写入  ---------------------

// 文件流式写入
ws.write('hello node', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("内容流入完成")
    }
})

// 文件写入完成（结束）
ws.end(() => {
    console.log("文件写入完成")
})