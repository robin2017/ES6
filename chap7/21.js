/**
 * 能够重置初值状态的状态机
 * */
function *f() {
    for (let i = 0; true; i++) {
        let reset = yield i;
        if (reset) {
            i = -1;
        }
    }
}

var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next());

