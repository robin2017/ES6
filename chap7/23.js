//es6-generator状态机：不需要外部变量保存状态
let clock = function *() {
    while (true) {
        yield  console.log("tick!");
        yield console.log("tock!");
    }
};
let clc = clock();
clc.next();
clc.next();
clc.next();
clc.next();


