//  getter 和 setter

class Person8 {
    constructor(private _name: string) { }

    // get 只读，可以将 类 里面 私有的值或者属性 进行 处理(加密) 后向外部提供访问
    get name() {
        return this._name + 'lee';
    }

    // set 可写
    set name(name: string) {
        // 对数据进行处理
        const realName = name.split(' ')[0];
        this._name = realName;

        console.log('写入', this._name)
    }
}

const person8 = new Person8('zyj');
console.log('读取', person8.name)
person8.name = 'zyj lee'











// 单例模式 （通过一个类只允许获取一个实例）

class Demo {
    // static 可以把该方法直接挂在 该 class 上面，而不是 class 的实例上面
    private static instaance: Demo; //用来存储 demo 的实例

    private constructor() { } //私有化 构造器，就无法通过 new 去实例化 该 class 


    static getInstance() {
        // 判断是否 已有 demo 的实例,没有就实例一次
        if (!this.instaance) {
            this.instaance = new Demo();
        }

        return this.instaance; // 将该实例返回，外界只能获取该实例，无法再 new Demo()
    }
}


// 此时 demo1 和 demo2 的实例 相等
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();











