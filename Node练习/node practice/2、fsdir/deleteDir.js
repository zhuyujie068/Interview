/**
 *  fs.rmdir
 *  删除文件 (删除后不可以恢复)
 *  http://nodejs.cn/api/fs.html#fs_fs_rmdir_path_options_callback
 */

let fs =require('fs');

fs.rmdir('abc',()=>{
    console.log("删除成功")
})

