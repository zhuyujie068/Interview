/**
 * 读写文件
 * fs.readFile() 函数会缓冲整个文件。 若要最小化内存成本，则尽可能选择流式（使用 fs.createReadStream()）。
 * http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback
 */

let fs = require('fs');


/**
 *  文件系统标志     
 *  当 flag 选项采用字符串时，则以下标志均可用：
 *  'a': 打开文件用于追加。 如果文件不存在，则创建该文件。
 *  'r': 打开文件用于读取。 如果文件不存在，则会发生异常。
 *  'w': 打开文件用于写入(会覆盖之前的内容)。 如果文件不存在则创建文件，如果文件存在则截断文件
 * 
 *  注： write => w     reas => r     append => a
 */

// 带有 Sync 的表示同步    
// 指定了 encoding 选项，则此函数返回字符串。 否则，返回 buffer 


// ****************  读取文件的全部内容  ****************  
// ****************  写入内容  **************** 

//  同步 (会造成等待和阻塞)  
let content = fs.readFileSync('hello.txt', {
    flag: 'r',
    encoding: 'utf-8'
});
console.log('同步', content)




// -----------------  未封装  ---------------------

fs.readFile('hello.txt', {
    flag: 'r',
    encoding: 'utf-8'
}, (err, data) => {
    if (err) {
        console.log('错误：', err)
    } else {
        console.log('未封装异步', data)
    }
})

// -----------------  进行封装  ---------------------

// 将异步进行封装
function fsRead(path) {
    return new Promise((resolve, rejects) => {
        fs.readFile(path, {
            flag: 'r',
            encoding: 'utf-8'
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

// -----------------  调封装  ---------------------
let w1 = fsRead('hello.txt').then((res) => {
    console.log('封装后的异步', res)
})


// -----------------  升级：通过第一个文件内容获取第二个文件  ---------------------
async function ReadList() {
    let file = await fsRead('text.txt');
    let file2 = await fsRead(file.trim() + '.txt'); // trim() 去掉字符串左右的空格
    let file3 = await fsRead(file2 + '.txt');
    console.log(file3);
}

ReadList()