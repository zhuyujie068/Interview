/**
 *  path（路径）
 *  path 模块提供了一些实用工具，用于处理文件和目录的路径
 *  http://nodejs.cn/api/path.html。
 * 
 * 
 *  path.extname() 获取文件（可以是一个路径文件）的扩展名
 *  path.resolve([...paths]) 把一个路径或路径片段的序列解析为一个   决定路径
 *  path.join([...paths]) 方法使用平台特定的分隔符（window：\）把全部给定的 path 片段连接到一起，并规范生成的路径    （使用的比较多）
 * 
 */

const path = require("path")


// -----------------  获取扩展名  ---------------------

let strPath = "http://nodejs.cn/api/path.html";

// 获取路径信息的扩展名
let info = path.extname(strPath);
console.log('获取的扩展名：', info);



// -----------------  解析成 决定路径 (默认是当前命名执行的目录)  ---------------------

let arr = ['/Node', 'path', '练习']
let info1 = path.resolve(...arr)
console.log("解析成决定路径:", info1)



// -----------------  生成规范路径  ---------------------
let info2 = path.join('Node', 'path', '练习')
console.log("生成规范路径:", info2)



/**
 *  __dirname       获得当前执行文件所在  目录  的完整目录名
 *  __filename      获得当前执行  文件  的带有决对路径的文件名
 *  process.cwd()   获得当前执行  node命令  时候的文件目录名
 */

console.log('文件所在目录', __dirname)
console.log('决对路径的文件名', __filename)
console.log(' 执行 node命令 时文件目录名', process.cwd())