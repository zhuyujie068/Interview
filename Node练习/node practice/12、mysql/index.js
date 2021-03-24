let mysql = require('mysql');
let options = {
    host: '127.0.0.1', //主机名或IP地址
    port: '3306', //端口
    user: 'root', //用户名
    password: 'zhuyujie',
    database: 'test' //连接库名
}

// 创建连接
let con = mysql.createConnection(options)

// 建立连接
con.connect((err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('数据库连接成功')
    }
})

// 执行数据库语句
// 执行查询语句
let strSql="select * from student";
con.query(strSql,(err,results,fields)=>{
    console.log(err)
    console.log(results)
    console.log(fields)
})

