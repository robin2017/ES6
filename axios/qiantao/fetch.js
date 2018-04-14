import {request_get} from './request';

export async function getData_baidu() {
    var url = 'http://www.baidu.com';
    return await request_get(url);
}

export async function getData_ali() {
    var url = 'http://www.alibaba.com';
    return await request_get(url);
};


