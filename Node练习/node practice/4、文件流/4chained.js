/**
 *  链式流
 *  链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
 *  用管道和链式来压缩和解压文件。
 * 
 *  zlib（压缩）
 *  zlib 模块提供通过 Gzip、Deflate/Inflate、和 Brotli 实现的压缩功能。
 *  http://nodejs.cn/api/zlib.html
 */


const fs = require("fs")
const zlib = require("zlib")

// -----------------  压缩  ---------------------


// 压缩 text.txt 文件为 text.txt.gz
// fs.createReadStream('text.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('text.txt.gz'));

// console.log("文件压缩完成")


// -----------------  解压  ---------------------


// 解压 text.txt.gz 文件为 text1.txt 
fs.createReadStream('text.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('text1.txt'));

console.log("文件解压完成")