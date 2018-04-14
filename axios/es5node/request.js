var axios = require('axios');
exports.request_get = function (url) {
    //axios返回的就是promise
    return axios.get(url);
};

