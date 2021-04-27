/**
    TS 相比 JS 优势
    1、开发过程中，能发现潜在问题
    2、更友好的编辑器自动提示
    3、代码语义更清晰易懂


    安装 ts
    npm unstall -g typescript

    将 ts 转换成为 js 并且使用 node 进行运行
    npm install -g ts-node = 相当于 => tsc xxx.ts (文件) 再使用node运行 生成的 xxx.js 文件
 * /



/* 自定义类型 interface */

/*
    基础类型
        布尔值                          boolean
        数字                            number
        字符串                          string
        表示没有任何类型                 void
        null                            null
        undefined                       undefined
        symbol                          symbol
*/


//  当变量声明与赋值在一行时（声明时并没有进行类型注解） TS 可以直接推断出 类型，如果不在一行时，TS 无法进行推断
let count1: number; // 给变量进行 类型注解

let count2 = 123; // TS 推断类型为 number


let count3;
count3 = 123; // TS 无法进行 类型推断



// 对一个变量注解为两种类型
let temp: number | string = 123; //此时 temp 值及可以为 number 或 string
temp = '456';





/*
    对象类型
        数组                            []
        类                              class
        函数                            function
        普通对象                        {}
*/


// 函数类型声明 两种 方法：


// 方法一：TS 根据 return 时 发现 parseInt() 方法推断出 返回值 一定为 number ，所以此时 返回值 不需要进行类型注解（使用此方法一般情况下都不需要进行返回值类型注解，因为TS可以推断出来）

// const func = (str: string): number => {
//     return parseInt(str, 10)
// }

const func = (str: string) => {
    return parseInt(str, 10)
}




// 方法二：但是此方法必须对返回值进行注解，否则语法报错
const func1: (str: string) => number = (str) => {
    return parseInt(str, 10)
}



// 像通过 new Date() 声明的变量 ，TS 可以推断其类型
const date = new Date()




