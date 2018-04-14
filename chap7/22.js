//es5状态机：需要外部变量保存状态
var ticking = true;
var clock = function () {
    if (ticking) {
        console.log("tick!");
    } else {
        console.log("tock!")
    }
    ticking = !ticking;
}

clock();
clock();
clock();
clock();

