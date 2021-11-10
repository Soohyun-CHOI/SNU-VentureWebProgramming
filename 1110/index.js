// OOP

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;

        this.x = 0;
        this.y = 0;
    }
    move(_x, _y) {
        // function () 내에서 this: binding
        const self = this;
        function move2() {
            console.log(self.x);
        }
        // arrow function 내에서 this: binding 하지 않음 (실행환경을 구성하지 않음)
        const move3 = () => {
            console.log(this.x);
        }
        move2();
        move3();
        this.x += _x;
        this.y += _y;
    }
}

class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color);  // super: 부모와 동일하게 사용
        this.weight = 20;
    }
    bark() {
        console.log(`Bowwow~ I'm ${this.name}. I'm ${this.age} years old. My color is ${this.color}. ${this.weight}`);
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color);
        this.weight = 10;
    }
    bark() {
        console.log(`Meow~ I'm ${this.name}. I'm ${this.age} years old. My color is ${this.color}. ${this.weight}`);
    }
    eat() {
        this.weight += 1;
    }
}

const cat = new Cat("Bob", 10, "blue");
cat.bark();
cat.move(2, 2);
console.log(cat);

const dog = new Dog("Pretty", 5, "white");
dog.bark();
dog.move(4, 5);
console.log(dog);

const animal = new Animal("elephant", 300, "grey");
console.log(cat instanceof Cat);
console.log(animal instanceof Dog);


// prototype (arrow function 으로 불가능: prototype 속성 없음)

Animal.prototype.move4 = function (x, y) {
    this.x += x * 3;
    this.y += y * 3;
}
animal.move4(3, 3);
console.log(animal);

Array.prototype.multiplyBy3 = function () {
    return this.map(e => e *3);
}
console.log([1, 2, 3].multiplyBy3());