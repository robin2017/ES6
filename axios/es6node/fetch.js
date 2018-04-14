import {request_get} from './request';
export const getData =  () =>{
    var url = 'http://www.baidu.com';
    //直接返回一个promise
    // 中间不用对promise做任何处理
    return  request_get(url);
};


