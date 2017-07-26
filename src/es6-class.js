// 原型方法
class Reactangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get Area() {
    return this.width * this.height
  }
}
const small = new Reactangle(10, 10); //100
const big = new Reactangle(100, 400); //40000
console.log(big.Area);

// 静态方法
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(1, 2);
const p2 = new Point(3, 4);

console.log(Point.distance(p1, p2));

// 创建子类
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name}ooooooo`);
  }
}

var d = new Dog('keji');
d.speak();

/**
 * 如果子类中存在构造函数，则需要在使用“this”之前首先调用super（)
 */

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('balion')
l.speak()

// 继承后自定义与调用父级元素
class AnimalAnthoer {
  constructor() {
    this.legs = 4;
    this.mouth = 1;
  }
  speak() {
    console.log("我是一个动物:拥有腿->" + this.legs);
  }
  get type() {
    console.log(this.mouth + "个嘴的" + this.typer || "哺乳动物");
  }
  set type(typer) {
    this.typer = typer;
  }
  static runny() {
    console.log("我正在奔跑");
  }
  static get dowhat() {
    console.log("我说了我正在奔跑");
  }
}
class Monkey extends AnimalAnthoer {
  constructor() {
    super();
    this.legs = 2;
  }
  special() {
    super.type = "高级哺乳动物";
    super.type;
    console.log(this.mouth);
  }
}
var monkey = new Monkey();
monkey.special();