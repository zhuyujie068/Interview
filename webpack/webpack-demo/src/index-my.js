//浏览器中不能识别 ES6 Modelu/commonJS 模块导入导出规范的代码
// Es6 Modelu 规范 (引入必须在最开始)
import {
    name
} from './nav'

// commonJS 规范
// let {
//     debounce
// } = require('./common.js');

// 样式（css、less）需要我们在入口的 JS 中导入后才可以使用
require('./index.less');

// 导入@babel/polyfill 插件
// require('@babel/polyfill');

// debounce();
console.log(name);

// @log
// class A {
//     constructor() { }

//     sum() {
//         console.log('sum');
//     }

//     n = 10;
//     static m = 20;

//     static fun() {
//         console.log('fun');
//     }
// }

// function log(target) {
//     target.decorator = true;
// }

// A.fun();
// console.log(A.m);
// console.log(a.decorator);
// console.log(new A().n);
// new A().sum();

// function sum() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(100);
//         }, 1000);
//     });
// }

// async function fu() {
//     let n=await sum();
//     console.log(n);
// }
// fn();

