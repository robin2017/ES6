var request = require('./request');
exports.getData = function () {
    var url = 'http://www.baidu.com';
    //直接返回一个promise
    // 中间不用对promise做任何处理
    return request.request_get(url);
};


