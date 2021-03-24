/**
 *  fs.createReadStream
 *  读取流（就是可以将大型文件（音频、视频等等）一点点读取，每读到一点数据就发送）
 *  http://nodejs.cn/api/fs.html#fs_fs_createreadstream_path_options
 */

let fs = require('fs')

// 创建读取流
let rs = fs.createReadStream('hello.txt', {
    flags: 'r'
})

console.log(rs)



// 创建写入流
let ws = fs.createWriteStream('hello2.txt', {
    flags: 'w'
})



// -----------------  使用  ---------------------

// 每一次（批）数据流入完成
rs.on('data', (chunk) => {
    console.log('单批数据流入',chunk) // 如果读取的数据比较少基本上就是一批就读取完，可以使用 视频 做测试,会分成多批次读取
    console.log('流入字节大小',chunk.length) //  单词流入最大字节为 65536 （最大流入字节根据不同的数据大小会不一样）


    // 将读取到的数据进行写入到另一个文件里（实现复制功能）, 可以使用 （ 管道进行流入 ） 进行简化 操作 ，管道 是通过这样封装的
    ws.write(chunk,()=>{
        console.log("单批输入流入完成")
    })
})


// -----------------  监听事件  ---------------------


// 监听文件打开事件
rs.on('open', () => {
    console.log('读取的文件已打开')
})

// 监听文件关闭事件
rs.on("close", () => {
    console.log("读取流结束")

    //关闭 写入流
    ws.end();
    console.log("写入完成")
})