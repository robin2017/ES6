var biz = {
    getData: function () {
        fetch.getData().then(function (res) {
            console.log(res.data)
        }).catch(function (err) {
            console.log(err)
        })
    }
};
biz.getData();
