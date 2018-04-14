import axios from 'axios';
export const request_get = (url)=> {
    //axios返回的就是promise
    return axios.get(url).then((res)=> {
        //这里做了一个预处理，取出data往后面传递
        return res.status
    });
};

