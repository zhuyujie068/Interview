// 封装
class Person6 {
    name = 'zyj';
    getName() {
        return this.name;
    }
}


// 继承
class Teacher6 extends Person6 {
    getTeacherName() {
        return 'teacher'
    }


    // 重写
    getName() {
        // super 在子类中使用，可以理解为是 其 父类， 一般用于 子类重写父类方法后，再重新调用父类中的方法
        // super.getName() 是获取父类的 getName() 方法
        return super.getName() + 'lee'
    }
}


const person6 = new Person6()
console.log(person6.name)

const teacher = new Teacher6()
console.log(teacher.getTeacherName())

console.log(teacher.getName())

