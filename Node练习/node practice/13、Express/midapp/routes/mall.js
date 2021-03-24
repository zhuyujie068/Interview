/**
 *  路由中间件
 */
var express = require('express');

// 实例化路由模块（此路由模块相当于一个小的app实例）
let router = express.Router()

// 在路由中添加应用层中间件
router.use((res,req,next)=>{
    console.log('判断是否有权限访问')
    next()
})


router.get('/', (req, res) => { //http://172.30.1.254:3000/mall
    res.send('商城首页')
})

router.get('/list', (req, res) => { // http://172.30.1.254:3000/mall/list
    res.send('商城产品列表页')
})


module.exports = router;