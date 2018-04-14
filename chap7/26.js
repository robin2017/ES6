//一般的传值调用
function f1(m) {
    return m * 2;
}
console.log(f1(2 + 5));

//thunk的传名调用
var thunk = function () {
    return 2 + 5;
};
function f2(thunk) {
    return thunk() * 2;
}
console.log(f2(thunk));


