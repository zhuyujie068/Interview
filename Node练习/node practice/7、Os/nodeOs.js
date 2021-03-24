/**
 *  os（操作系统）
 *  获取系统的一些信息 （一般不怎么用、了解就可以）
 *  http://nodejs.cn/api/os.html#os_os
 */

const os = require("os")



// 获取 cpu 信息
console.log('cpu 信息：', os.cpus())


// 获取内存信息
console.log('内存信息：', os.totalmem())


// 查看系统架构
console.log('系统架构:', os.arch())


// 查看剩余内存
console.log('剩余内存:', os.freemem())


// 查看系统平台
console.log('系统平台:', os.platform())