function testDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        name = 'lee';
    };
}


@testDecorator
class Test2 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

const test2 = new Test2('zyj');
console.log(test2)










