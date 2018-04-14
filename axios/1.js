var axios = require('axios')
axios.get('http://www.baidu.com')
    .then(function (response) {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.config);
        console.log(response.headers);
        // console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });


