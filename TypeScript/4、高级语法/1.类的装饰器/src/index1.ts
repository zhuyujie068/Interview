// 类的装饰器
// 装饰器本身是一个函数
// 装饰器通过 @ 符合来使用，装饰器是对类做装饰当类创建好就会立即执行，使用时需要去 tsconfig.json 打开相应的配置，否则会警告
// 如果使用多个 装饰器 他们执行顺序是  由右到左，由下到上

// 类装饰器接收的参数是构造函数
function testDecorator(constructor: any) {
    console.log('执行顺序：1')
    constructor.prototype.getName = () => {
        console.log('zyj')
    }
}

// 将函数返回的内容作为装饰器
function tests() {
    return function (constructor: any) {
        console.log('执行顺序：2')
        constructor.prototype.getAge = () => {
            console.log('18')
        }
    }
}


@testDecorator
@tests()
class Test { }

const test = new Test();
(test as any).getName();
(test as any).getAge();











