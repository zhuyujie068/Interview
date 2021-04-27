class Person9 {
    // readonly 修饰符，表示 只读
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person9 = new Person9('zyj');
console.log(person9.name);






// 抽象类
// abstract 可以定义抽象类、抽象方法
// 抽象类，把共用性的一些方法、属性给 抽离出来，不能够被实例，只能被继承
abstract class Geom {
    width: number;
    getType() {
        return 'Cemo'
    }
    abstract getArea(): number; // 抽象方法，是其方法内部分实现的不一定一致，但是多有该方法
}

class Circle extends Geom {
    // 调用继承的抽象方法
    getArea() {
        return 123;
    }
}



