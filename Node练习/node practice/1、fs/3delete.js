 /**
 *  fs.unlink
 *  删除文件  (谨慎使用，删除后不可恢复)
 *  http://nodejs.cn/api/fs.html#fs_fs_unlink_path_callback
 */

let fs = require('fs')


fs.unlink('delete.txt',()=>{
    console.log('删除成功')
})

