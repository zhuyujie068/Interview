let fs = require('fs');

/**
 *  读取文件内容 
 */
function fsRead(path, flag = 'r', encoding = 'utf-8') {
    return new Promise((resolve, rejects) => {
        fs.readFile(path, {
            flag,
            encoding
        }, (err, data) => {
            if (err) {
                // 失败执行的内容
                rejects(err)
            } else {
                // 成功执行的内容
                resolve(data)
            }
        })
    })
}

/**
 *  内容写入 
 */
function fsWrite(prat, content, flag = 'a', encoding = 'utf-8') {
    return new Promise((resolve, reject) => {
        fs.writeFile(prat, content, {
            flag,
            encoding
        }, (err) => {
            if (err) {
                // 写入内容出错
                reject(err)
            } else {
                // 写入内容成功
                resolve(err)
            }
        })
    })
}


/**
 * readline（逐行读取）
 *  title 标题
 */
function lcQuestion(title) {
    return new Promise((resolve, rejects) => {
        r1.question(title, (answer) => {
            resolve(answer)
        })
    })
}





module.exports = {
    fsRead,
    fsWrite,
    lcQuestion
}