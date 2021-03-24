/**
 *  readline（逐行读取）
 *  readline 模块提供了一个接口，用于一次一行地读取可读流（例如 process.stdin）中的数据
 *  http://nodejs.cn/api/readline.html
 */

let readline = require('readline');


let {
    fsWrite
} = require('../utils');



// 实例化接口对象
let r1 = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})


// -----------------  进行封装  ---------------------
/**
 *  title 标题
 */
function lcQuestion(title) {
    return new Promise((resolve, rejects) => {
        r1.question(title, (answer) => {
            resolve(answer)
        })
    })
}


// ----------------- 升级： 模拟提问（创建项目）  ---------------------

async function createPackage() {
    let name = await lcQuestion("这个项目名叫什么？")
    let description = await lcQuestion("请描述该项目？")
    let versions = await lcQuestion("项目版本是多少？")
    let author = await lcQuestion("项目的作者是谁？")

    let content = `
        {
            "name": "${name}",
            "description": "${description}",
            "versions": "${versions}",
            "author": "${author}"
        }
    `

    // 将内容进行写入
    await fsWrite('index.txt', content)

    // 不加 close ，则不会结束(关闭进程)
    r1.close();

}

createPackage()


// close 事件监听
r1.on("close", () => {
    // 结束程序
    process.exit(0);
})