interface Person {
    name: string;
    age: number;
    gender: string;
}


class Teacher {
    constructor(private info: Person) { }
    // keyof 的使用
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key];
    }
}



const teacher = new Teacher({
    name: 'zyj',

    age: 18,
    gender: 'male'
});

console.log(teacher.getInfo('name'));
 

