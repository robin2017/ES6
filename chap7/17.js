//参数为生成器函数，代表执行的任务
function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function step() {
        if (!result.done) {
            //必须传参数，不然输出为undefined
            result = task.next(result.value);
            step();
        }
    }

    step();
}

function *generator() {
    let value = yield 1;
    console.log(value)

    value = yield value + 3;
    console.log(value)
}

run(generator)