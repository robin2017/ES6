//1、回调函数
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                //DO SOMETHING WITH VALUE4
            })
        })
    })
});

//2、promise
Promise.resolve(step1)
    .then(step2)
    .then(step3)
    .then(step4)
    .catch(function (err) {
        //DO SOMETHING WITH ERROR
    }).done();

//3、generator+yield
function *longRunningTask(value1) {
    try {
        var value2 = yield step1(value1);
        var value3 = yield step2(value2);
        var value4 = yield step3(value3);
        var value5 = yield step4(value4);
    } catch (e) {
        //DO SOMETHING WITH ERROR
    }
}
function scheduler(task) {
    var taskObj = task.next(task.value);
    if (!taskObj.done) {
        task.value = taskObj.value;
        scheduler(task)
    }
}
scheduler(longRunningTask(initialValue));



