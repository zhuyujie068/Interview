interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

// 联合类型：使用 | 将两个或多个 类型 都取用，但是在语法提示时候只会提示，联合起来类型公有 的 属性或方法

// 类型保护，当使用 联合类型 时，编辑器会不确定传递参数的类型从而会发出警告，通过一系列的 判断与类型确认，让编辑器不报警告与错误
function trainAnial(animal: Bird | Dog) {
    // 方法一：我们可以通过 类型断言 和 对逻辑的理解，去确保代码不再提错
    // 类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
    if (animal.fly) {
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark();
    }
}



function trainAnialSecond(animal: Bird | Dog) {
    // 方法二：通过 in 语法来做类型保护
    // 通过判断传递的参数中有没有其中的属性或者方法
    if ('sing' in animal) { // 判断传递的 animal 是属于那个类型 其中有没有 sing 方法
        animal.sing();
    } else {
        animal.bark();
    }
}



// 方法三：通过 typeof 语法 来做类型保护 
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second;
}


// 使用 instanceof 语法来做类型保护 （是使用 class 做类型注解，如果是 interface 注解则不可以）

class NumberObj {
    count: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}





