// example 1
var name  = 'out';
function f1() {
    var name = 'inner';
    return function() {
        console.log(name);
    }
}
const resut1 = f1();
resut1();

// example 2
// 封装私有变量
// 将函数暴露在外面，具体操作隐藏在里面
function arrray() {
    var arr = [];
    this.add = function(v) {
        if(typeof v === 'number'){
            arr.push(v);
        }
        console.log('add:', arr)
    }
    this.get = function(i) {
        if(i > arr.length) {
            console.log('get null')
            return null;
        }
        console.log('get:', arr[i])
        return arr[i];
    }
}
var arr = new arrray();
arr.add(1);

// example3
// setTimeout传递的第一个函数不带参数，通过闭包实现传参
// 通过闭包实现，1秒之后打印函数
function oneMin(t) {
    function time() {
        console.log('一秒之后输出：', t);
    }
    return time;
}
const getOnemin = oneMin(1);
setTimeout(getOnemin, 1000);

// example4
// setTimeout每隔一秒分别输出1，2，3，4
function outTime() {
    for(var i=0; i<4; i++) {
        (function(x){
            setTimeout(function(){
                console.log(x);
            }, 1000 * x)
        })(i)
    }
}
outTime();

// 应用场景: 为元素的伪数组添加事件
const liArr = document.querySelectorAll('li');
for(var i=0; i<liArr.length; i++) {
    (function(x){
        liArr[x].onclick = function() {
            console.log(x);
        }
    })(i)
}

// 防抖，节流




