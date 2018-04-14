function showLoadingScreen() {
}
function loadUIDataAsynchronously() {
}
function hideLoadingScreen() {
}


//1、generator+yield
function *loadUI() {
    showLoadingScreen();
    //第一步
    yield loadUIDataAsynchronously();
    //第二部
    hideLoadingScreen();
}
var loader1 = loadUI();
//加载ui
loader1.next();
//卸载ui
loader1.next()

//2、回调函数
function loadUI() {
    showLoadingScreen();
    //第一步
    loadUIDataAsynchronously(function () {
        //第二步
        hideLoadingScreen()
    })
}
var loader2 = loadUI();
