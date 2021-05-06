
// 普通方法，target（第一个参数） 对应的是类的 prototype ，key（第二个参数） 装饰 的 方法的名字，descriptor （第三个参数） 是对方法的 descriptor的属性 做一些编辑
// static 静态方法，target 对应的是类的构造函数
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {

}

class Test3 {
    name: string;
    constructor(name: string) {
        this.name = name
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const test3 = new Test3('zyj');
console.log(test3.getName())










