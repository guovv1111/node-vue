<template>
<div>create obj</div>
</template>
<script setup>
// @创建对像
// 一、对象字面量：大量重复代码
var obj = {
    name: 'name'
}
// 二、工厂：方法中返回对象，不清楚对象类型
function factory(name) {
    var o = new Object();
    o.name = name;
    return name;
}
// 三、构造函数：new操作符。每次创建对象，方法都要重新创建一个，存储方法需要重新开辟一个地址，造成内存浪费。
function ConstructObj(name) {
    this.name = name;
    this.get = function() {
        return this.name;
    }
}
// 四、原型对象：prototype。创建的实例都可以共享原型上的属性和方法
function PersonPro() {}
PersonPro.prototype.name = 'lili';
PersonPro.prototype.get = function() {
    return this.name;
}
// 五、混合（构造函数和原型对象
function Mix(name) {
    this.name = name;
    this.age = [1,2];
}
Mix.prototype.get = function() {
    return this.name;
}
const mixobj1 = new Mix('lili');
const mixobj2 = new Mix('dada');
console.log('mixobj1=', mixobj1);
console.log('mixobj2=', mixobj2);

// @继承
function Parent() {
    this.name = 'lili';
    this.age = [1,2];
}
Parent.prototype.get = function() {
    console.log(this.name)
}
function Child() {
    this.type = 'child';
}
// 一、原型链式继承：父类的自身属性是引用类型，则子类之间修改相互会有影响
// 原因很简单：因为两个实例共享一个父类的原型对象
Child.prototype = new Parent();
const child = new Child();
const child2 = new Child();
child.age.push(222);
console.log('child:', child);
console.log('child2:', child2);
// 二、构造函数（借助call）：无法继承父类原型对象上的方法和属性
function Chi() {
    Parent.call(this);
    this.type = 'child';
}
const chl = new Chi();
console.log('chl:', chl);
console.log('chl:', chl.get());
// 三、组合式继承（原型链和构造函数）
function Child2() {
    Parent.call(this);
    this.type = this;
}
Child2.prototype = new Parent();
Child2.prototype.construct = Child2;
const ch = new Child2();
const ch2 = new Child2();
ch2.age.push(33)
console.log('组合继承原型链+构造函数', ch)
console.log('组合继承原型链+构造函数', ch2)

// @ 原型式继承Object.create(obj1,obj2) 一个是用作新对象原型的对象，一个是为新对象添加属性的对象
// @ 当对象的属性是引用类型时，则创建的新对象操作数据时，会相互影响
const objPro = {
    name: 'oo',
    age: 12,
    type: [1,2]
}
const newObjPro1 = Object.create(objPro);
const newObjPro2 = Object.create(objPro);
newObjPro1.name = 1;
newObjPro2.name = 2;
newObjPro1.type.push('333');
console.log('原型式', newObjPro1)
console.log('原型式', newObjPro2)
// @ 寄生式继承
function clone(obj) {
    const newObj  = Object.create(obj);
    // 引用类型的数据
    newObj.getType = function() {
        return this.type;
    }
    return newObj;
}
const clone1 = clone(obj);
const clone2 = clone(obj);
clone1.type.push('clone');
console.log('寄生式', newObjPro1)
console.log('寄生式', newObjPro2)

// @组合寄生式
function cloneCom(p, c) {
    c.prototype = Object.create(p.prototype);
    c.prototype.construct = c;
}

function P() {}
function C() {
    Parent.call(this)
}
cloneCom(P, C)
// @复习1：
// 创建对象的几种方式：对象字面量、工厂、构造函数、原型模式、混个模式（构造和原型）
// 工厂：返回一个对象，清楚对象的类型
// 构造函数：new：创建对象，将this指向这个对象，为这个对象赋值。缺点：每实例一个对象，页早新创建一个方法，造成内存浪费。
// 原型：prototype。每个对象都可以共享原型上的属性和方法。多个对象修改对象属性，会相互影响。
// 混合（构造函数和原型）将属性定义在构造函数上，方法定义在原型prototype。

// @复习2
// 继承的几种方式：构造函数式（借助call）、原型链式、混合式（构造函数和原型链）继承、原型式继承（Object.create）、寄生式继承、混合式继承

// @ 原型式：只能继承原型上的属性和方法
function FunParent() {
    name: 'lili'
}
FunParent.prototype.name = 'lili';
function FunChild() {

}
FunChild.prototype = new FunParent();
const fn1 = new FunChild();
const fn2 = new FunChild();
console.log('1=', fn1);
console.log('2=', fn2);;

// @构造函数式:无法继承父类原型的属性和方法
function ConPa() {
    this.name = 'lili';
    this.age =  [1,2];
}
ConPa.prototype.getName = function() {
    console.log('getName=', this.name)
}
function ConCh() {
    ConPa.call(this);
    this.type = 'type chi'
}
const conChi = new ConCh();
const conChi2 = new ConCh();
conChi.age.push('new');
console.log('1=', conChi);
console.log('2=', conChi2);

// @ 原型式:相当于浅拷贝。利用Object.create(objParent)
// 父类的属性式引用类型，子类修改会造成相互影响
const proObjP = {
    name: 'ii',
    age: [1, 2]
}
const proObjC = Object.create(proObjP);
const proObjC2 = Object.create(proObjP);
proObjC.age.push('new');

// @寄生式:子类可以很好的封装自己的方法
function clonePro(p) {
    const ch = Object.create(p);
    ch.getAge = function() {
        return this.age;
    }
    return ch;
}
const proObjC3 = clonePro(proObjP);

// @混合寄生式
function minClone(P, C) {
    C.prototype = Object.create(P.prototype);
    C.prototype.construct = C;
}
minClone(P, C)

// 防抖：规定时间内，如果再次触发，则从开始计算
function move() {
    let t = null;
    return function(){

        clearTimeout(t);
        t = setTimeout(function(){
            console.log('11');
        }, 1000);
    }
}

function moveSon() {
    let t = null;
    return function(){
        if(t === null) {
            console.log(3);
        }
        clearTimeout(t);
        t = null;
        t = setTimeout(function(){
            console.log(3);
            t = null;
        }, 1000);
    }
}

// 节流 固定的时间间隔请求
function th() {
    let t = Date.now();
    return function() {
        let cur  = Date.now();
        if(t-cur === 1000) {
            console.log(2);
            t = cur;
        }
    }
}



</script>