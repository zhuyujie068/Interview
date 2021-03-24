/**
 *  buffer (缓冲器  --> 了解即可 )
 *  对象用于表示固定长度的字节序列
 *  http://nodejs.cn/api/buffer.html
 */

const {
    Buffer
} = require("buffer")


// 1、数组不能进行二进制数据的操作
// 2、js数组不像 Java、Python 等语言效率高
// 3、buffer 会在内存空间开辟出固定大小的内存，会将数据存放在一起，使效率变高


// ---------- 在知道内容时的操作 ------------（一般开发时候不知道要存放的内容）

// 将信息以二进制存放到缓冲器中（在控制台打印出来显示的是 十六 进制，因为 二进制 显示的太长）
let str = "hello node"
let buf = Buffer.from(str)
console.log(buf)


// 输出 buffer 内容 (将 buffer 转换成 字符串)
console.log(buf.toString())





// ---------- 不知道内容时的操作 ------------
let buf1 = Buffer.alloc(10) // 开辟一个空的 buffer ,长度为 10 个长度 
buf1[0] = 255 // 将 255 存入
console.log('buf1[0]', buf1[0])
console.log('buf1', buf1)



// ----------------------

// 使用 allocUnsafe 开辟空间 是不安全的，但是效率 比 Buffer 高，如果存储不重要的信息可以使用
let buf2 = Buffer.allocUnsafe(10)
console.log('buf2', buf2)