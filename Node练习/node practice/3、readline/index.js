/**
 *  readline（逐行读取）
 *  readline 模块提供了一个接口，用于一次一行地读取可读流（例如 process.stdin）中的数据
 *  http://nodejs.cn/api/readline.html
 */
let readline = require('readline');


// 实例化接口对象
let r1 = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})

// 设置 r1 ,提问事件
r1.question("今天晚上吃什么？", (answer) => {
    console.log("答复：", answer)

    // 不加 close ，则不会结束
    r1.close();
})

// close 事件监听
r1.on("close", () => {
    // 结束程序
    process.exit(0);
})