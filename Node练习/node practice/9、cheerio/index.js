/**
 *  cheerio (第三方库)
 *  cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序(主要是为了用在服务器端需要对DOM进行操作的地方)。
 * 
 *  https://www.jianshu.com/p/629a81b4e013
 *  npm install cheerio
 * 
 * 
 *  axios (第三方库) 
 *  npm install axios
 */

const cheerio = require('cheerio');
const axios = require('axios');

const fs = require('fs');

const path = require('path')


//  获取 HTML 文档的内容，内容的获取跟 jQuery 一样
let httpUrl = "https://www.fabiaoqing.com/biaoqing/lists/?page=1"

axios.get(httpUrl).then((res) => {
    //  cheerio 解析 HTML 文档
    let $ = cheerio.load(res.data)   // 获取到要访问的页面

    // 获取 指定 元素下面的 img 标签
    $('#container .tagbqppdiv img').each((i, element) => {
        // console.log(i)

        // 通过 attr 获取该标签中的 data-original 属性的值
        let imgUrl = $(element).attr('data-original');// 获取图片链接
        // let name = $(element).attr('title');// 获取图片名字

    //    let imgName= name.Substring(0,4).trim()
        // console.log(imgUrl)

        let extName = path.extname(imgUrl);// 获取图片的扩展名

        // 创建写入图片流
        let imgPath = `./img/${i}${extName}`;//图片写入的路径和名字         10  58
        let ws = fs.createWriteStream(imgPath)

        axios.get(imgUrl,{responseType:'stream'}).then((res)=>{

            res.data.pipe(ws)
            console.log(imgName+'图片加载完成：')
        })

         
    })
})









