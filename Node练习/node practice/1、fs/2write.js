/**
 * 文件写入
 * 不等待回调就对同一个文件多次使用 fs.writeFile() 是不安全的。 对于这种情况，建议使用 fs.createWriteStream()。
 * http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback
 */

let fs = require('fs');


// -----------------  未封装  ---------------------     

fs.writeFile('write.txt', "---文件需要写入的信息---", {
    flag: "w",
    encoding: "utf-8"
}, (err) => {
    if (err) {
        console.log("写入内容出错", err)
    } else {
        console.log("写入内容成功")
    }
    
})


// -----------------  进行封装  ---------------------

function fsWrite(prat,content,flag='a',encoding='utf-8') {
    return new Promise((resolve,reject)=>{
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


// -----------------  调封装  ---------------------

async function WriteList() {
    await fsWrite('write.txt','\n今天准备吃什么？\n')
    await fsWrite('write.txt','吃麻辣烫\n')
    await fsWrite('write.txt','好呀\n')
}

WriteList()