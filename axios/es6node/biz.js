import {getData} from './fetch'
//catch只需要在业务层最后调用时候添加即可
getData().then(function (res) {
    console.log(res.status)
}).catch(function (err) {
    console.log(err)
});




