// 普通用法
class DataManager<T>{
    constructor(private data: T[]) { }

    getItem(index: number): T {
        return this.data[index];
    }
}

const data = new DataManager<number>([1])
console.log(data.getItem(0));





// 泛型继承 
// 泛型 要符合 所继承的规范
interface Item {
    name: string;
}

class demo<T extends Item>{
    constructor(private data: T[]) { }

    getItem(index: number): string {
        return this.data[index].name;
    }
}

const datas = new demo([
    {
        name: 'dell'
    }
])
console.log(datas)


// 泛型 也可以直接从 联合类型 进行 继承
class content<T extends number | string>{
    constructor(private data: T[]) { }
}







// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
    return params;
}

const func: <T>(param: T) => T = hello;


