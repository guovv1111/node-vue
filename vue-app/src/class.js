class Animal {
    // 构造函数，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
    constructor(name,color) {
      this.name = name;
      this.color = color;
    }
    toString() {
      console.log('name:' + this.name + ',color:' + this.color);
    }
}

class Cat extends Animal {
    constructor(age) {
        super('cat', 'red');
        this.age = age;
    }
    run() {
        console.log('run faster!')
    }
}

const getMane = () => {
    new Promise((resolve, reject) => {
        
    })
}
