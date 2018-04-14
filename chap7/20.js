//生成器函数在调用next()方法时才执行
function *f1() {
    console.log("f1 doing!!!")
}
var generator = f1();
setTimeout(function () {
    generator.next()
}, 2000)
//普通函数在变量赋值时就执行
function f2() {
    console.log("f2 doing!!!")
}
var normal = f2();