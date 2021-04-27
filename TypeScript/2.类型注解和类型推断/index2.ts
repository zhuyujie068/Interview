/*
    type annotation 类型注解，我们来告诉 TS 变量是什么类型
    type inference 类型推断，TS 会自动的去尝试分析变量的类型
    如果 TS 能够自动分析变量类型，我们就什么也不需要做了
    如果 TS 无法分析变量类型的话，我们就需要使用类型注解 （一般函数的参数需要给定 类型注解）
*/



// 类型注解
let count: number;
count = 123;


// 当没有为什么的变量进行 类型注解 TS 会进行类型推断
{
    const firstNumber = 1;
    const secondNumber = 2;
    const total = firstNumber + secondNumber;
}




// 此时 TS 无法推断出 函数 需要传递的变量的类型，因为传递的参数可以是 number 也可以是 string 
function getTotal(firstNumber, secondNumber) { // 此时需要我们给参数给定 类型注解 firstNumber:number , secondNumber:number ,从而 return 后 TS 可以推断 total 的数据类型为 number  
    return firstNumber + secondNumber;
}

const total = getTotal(1, 2);



// TS 自动推断 Obj 的属性类型 , name 为 string ，age 为 number
const obj = {
    name: 'dell',
    age: 18
}
