
//es5:有问题，输入timeout = 0／false，结果为2000
function makeRequest1(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function() {};
}

//es5:没问题，代码多
function makeRequest2(url, timeout, callback) {
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback : function() {};
}

//es6：没问题
function makeRequest3(url, timeout = 2000, callback = function() {}) {
}

