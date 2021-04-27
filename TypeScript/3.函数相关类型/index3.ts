// 当为函数的形参都给定了 number 时 它返回的参数 不一定为 number如：
function add(first: number, second: number) {
    return first + second + '' // 返回的类型为 string
}




// 当希望 函数 返回的值为给定的一个类型 可以为函数的返回值声明一个 类型
function add1(first: number, second: number): number {
    return first + second  // 此时返回的类型必须为 number ，否则会报错
}





// 不要返回值 给 函数返回值类型声明为 void ,此时如果有 return 则会报错 
function sayHello(): void {
    console.log("hello")
}




// 函数返回值类型为 never 表示该函数 永远无法将函数内的步骤全部执行完成（函数不能具有可访问的终结点）
function errorEmitter(): never {
    while (true) { }
}





// 当函数的参数为 解构 语法，需要将参数放在后面一个 {} 中进行注解
function yujie({ first, second }: { first: number, second: number }): number {
    return first + second;
}

const total1 = yujie({ first: 1, second: 2 })





