<script setup>
// import { isArray } from '@vue/shared';
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import CreateObject from './components/CreateObject.vue'

// // 防抖（延迟执行） 执行最后一次
// // 通过闭包实现私有变量的封装
// // 通过闭包实现传参
// function debounce(id) {
//     let timer = null;
//     return function() {
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//             console.log('延迟防抖-search id=', id);
//         }, 1000)
//     }
// }

// // 防抖-立即执行
// function debounceSun(id) {
//     let timer = null;
//     return function() {
//         if(timer === null) {
//             console.log('立即防抖-search id=', id);
//         }
//         clearTimeout(timer);
//         timer = null;
//         timer = setTimeout(function() {
//             console.log('立即防抖-search id=', id);
//         }, 1000)
//     }
// }
// const debounceLater = debounce(12);
// const debounceNow = debounceSun(12);

// // 节流：前缘和延迟执行
// // 固定周期执行
// // 前缘
// function throttleFront(wait) {
//     let time = 0;
//     return function() {
//         let now = Date.now();
//         if(now - time > wait) {
//             console.log('throttlefront----');
//             time = now;
//         }
//     }
// }

// // 延迟执行
// function throttleLater(wait) {
//     let time = Date.now();
//     return function() {
//         let now = Date.now();
//         if(now - time > wait) {
//             console.log('later throttle');
//             time = now;
//         }
//     }
// }

// const getFrontThrottle = throttleFront(1000)
// const getLaterThrottle = throttleLater(1000)

// // apply
// // 改变this 
// // 第一个参数是改变this指向的obj，第二个参数是数组
// Function.prototype.applyType = function(context) {
//     context = context || window;
//     context.foo = this;
//     let result = arguments[1] ? (
//         isArray(arguments[1]) ? context.foo(...arguments[1]) : context.foo(arguments[1])
//     ) : context.foo();
//     delete context.foo;
//     return result
// }

// // call
// // 改变this
// // 第一个参数是this指向的obj
// // 第二个是三个。。。参数是参数列表
// Function.prototype.callType = function(context) {
//     context = context || window;
//     context.foo = this;
//     const arg = [...arguments].slice(1);
//     let result = context.foo(...arg);
//     delete context.foo;
//     return result;
// }

// // bind
// // 返回一个方法
// // 使用： f.bind(obj, arg1, arg2.....)()  or  f.bind()(obj, arg1, arg2.....)
// Function.prototype.bindType = function(context) {
//     context = context || window;
//     _this = this;
//     let arg = [...arguments].slice(1);
//     return function() {
//         _this.applyType(context, arg.concat(...arguments))
//     }
// }
// const obj = {
//     name: 'lili'
// }
// function getMessage() {
//     console.log(this.name)
// }
// getMessage.applyType(obj);

// // @ 复习防抖（前缘和延迟）
// // 应用闭包：setTimeOut传参，封装变量
// function laterD(wait) {
//     const timer = null;
//     return function() {
//         clearTimeout(timer);
//         timer = null;
//         setTimeout(function() {
//             console.log('延迟防抖', wait)
//         }, 1000)
//     }
// }
// const pp = laterD(100)

// // 复习防抖（前缘）
// function preD(wait) {
//     const timer = null;
//     return function() {
//         if(timer === null) {
//             console.log('前缘防抖', wait)
//         }
//         clearTimeout(timer);
//         timer = null;
//         setTimeout(function() {
//             console.log('前缘防抖', wait);
//             timer = null;
//         }, 1000)
//     }
// }

// // @ 复习节流（前缘和延迟）
// function laterTh(wait) {
//     const timer = Date.now();
//     return function() {
//         const now = Date.now();
//         if(now - timer > wait) {
//             console.log('延迟节流', wait);
//             timer = now;
//         }
//     }
// }
// // @ 前缘节流
// function nowTh(wait) {
//     const timer = 0;
//     return function() {
//         const now = Date.now();
//         if(now - timer > wait) {
//             console.log('延迟节流', wait);
//             timer = now;
//         }
//     }
// }

// @ 解构 分别暴露或者统一暴露
// import { a, test } from './config';
// @ 直接引入，默认暴露
// import de from './default';
// import de2 from './default';
// console.log('=====', a);
// test();

</script>
<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
        <HelloWorld msg="You did it!" />
    </div>
    <!-- <div @click="debounceLater">防抖-延迟执行</div>
    <div @click="debounceNow">防抖-立即执行</div>
    <div @click="getFrontThrottle">节流-前缘执行</div>
    <div @click="getLaterThrottle">节流-延迟执行</div> -->
  </header>

  <main>
    <CreateObject></CreateObject>
    <TheWelcome />
  </main>
 
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
