import {getData_baidu, getData_ali} from './fetch'
//catch只需要在业务层最后调用时候添加即可
async function doBiz() {
    let res1 = null;
    let res2 = null;
    res1 = await getData_baidu()
    if (res1 == '200') {
        console.log('--成功得到百度数据----')
        res2 = await getData_ali();
        if (res2 == '200') {
            console.log('--成功得到阿里数据----')
        }
    }
}
doBiz();




