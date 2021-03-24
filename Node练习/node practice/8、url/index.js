/**
 *  url
 *  url 模块用于处理与解析 URL
 *  http://nodejs.cn/api/url.html#url_url
 */

const url = require('url')



// url.parse() 方法可以解析一个 url 地址，通过传入第二个参数 （true） 把包含有查询字符串的 query 转换成对象

let httpUrl = 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'
let urlObj = url.parse(httpUrl)
console.log(urlObj)


// url.resolve() 方法解析 相对于基 URL 的目标 URL 。第一个参数：基URL ，第二个参数：目标URL
let urlStr =url.resolve('https://www.bilibili.com','/video') // 第二个参数前面的 '/' 表示根路径，如果省略则取代 基URL 的最后一个地址
console.log(urlStr)



