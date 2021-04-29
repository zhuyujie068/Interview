/*

// .d.ts 文件 ： 类型注解，帮助 ts 去理解其对应的 js 文件 的内容

// 定义全局变量
// declare var $: (param: () => void) => void;



interface JqueryInstance {
    html: (html: string) => JqueryInstance;
}

// 定义全局函数

// 函数重载，同一个函数可以通过多种方式进行加载
declare function $(param: () => void): void;
declare function $(param: string): JqueryInstance;


// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
    namespace fn {
        class init { }
    }
}



// // 使用 interface 的语法，实现函数重载
// interface JQuery {
//     (readyFunc: () => void): void;
//     (selector: string): JqueryInstance;
// }

// declare var $: JQuery;


*/


// ES6 模块化

declare module 'jquery' {

    interface JqueryInstance {
        html: (html: string) => JqueryInstance;
    }


    // 混合类型
    function $(param: () => void): void;
    function $(param: string): JqueryInstance;


    // 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
    namespace $ {
        namespace fn {
            class init { }
        }
    }

    export =$;
}




