/**
 *  fs.readdir
 *  读取目录的内容
 *  http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback
 */
let fs = require('fs');
let {
    fsRead,
    fsWrite
} = require('../utils');

fs.readdir('../1、fs', (err, files) => {
    if (err) {
        console.log('读取失败：', err)
    } else {
        console.log(files)

        // 将读取目录 的 所有内容 进行写入 的 一个文件 中（将目录下的内容进行合并到一个文件中）
        files.forEach(async (filename, i) => {
            let content = await fsRead('../1、fs/' + filename)
            console.log(content)
            await fsWrite('text.txt', content)
        })

    }
})