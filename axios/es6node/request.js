import axios from 'axios';
export const request_get = (url)=> {
    //axios返回的就是promise
    return axios.get(url);
};

