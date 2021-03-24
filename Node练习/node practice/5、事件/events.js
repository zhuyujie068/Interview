/**
 * events（事件触发器）
 * Node.js 基本上所有的事件机制都是用设计模式中的观察者模式实现。
 * Node.js 单线程类似进入一个 while(true) 的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数
 *   
 *  （可用将回调变成一个个单独的事件进行触发）
 * http://nodejs.cn/api/events.html
 */

// 1、引入 events 模块
const events = require('events')

// 2、创建 eventEmitter 对象
let eventEmitter = new events.EventEmitter();


// 3、创建事件处理程序
let connectHandler = function connected(data) {
    console.log('连接成功。', data)

    // （5、触发 合并 3~4 过程的处理程序） 触发 data_received 事件
    eventEmitter.emit('data_received');
}

// 4、绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);



// （将 3~4 合并）使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', () => {
    console.log("数据接收成功。")
});


//5、触发 connection 事件
eventEmitter.emit('connection', '----触发时候，可传递参数，也可以不传递----');


console.log("程序执行完毕。")