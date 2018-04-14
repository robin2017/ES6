//参数为生成器函数，代表执行的任务
function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function step() {
        if (!result.done) {
            result = task.next();
            step();
        }
    }

    step();
}

function *generator() {
    console.log(1)
    yield;
    console.log(2)
    yield;
    console.log(3)
}
//没有实用价值
run(generator)