/**
 * 原型和原型链
 */

// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
}

// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

// 实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()

// 实例
const wanglaoshi = new Teacher('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()
wanglaoshi.eat()

console.log("-----instanceof-----");
console.log(xialuo instanceof Student);
console.log(xialuo instanceof People);
console.log(xialuo instanceof Object);
console.log([] instanceof Array);

console.log("---原型---");
//class实际上是函数
console.log(typeof People);
console.log(typeof Student);

//隐式原型和显式原型
console.log(xialuo.__proto__)  //Student{ }
console.log(Student.prototype)
console.log(xialuo.__proto__ === Student.prototype) //true

console.log(Student.prototype.__proto__); //People{ }
console.log(People.prototype);
console.log(People.prototype === Student.prototype.__proto__);