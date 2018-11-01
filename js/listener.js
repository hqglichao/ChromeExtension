document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.startsWith("https://buy.m.tmall.com") || window.location.href.startsWith("http://buy.m.tmall.com")) {
        console.log("in buy page.");
        sureBtnClick();
        return;
    }
    var buyDisabledBtn = document.getElementsByClassName("buy disabled");
    var buyBtn = document.getElementsByClassName("buy");
    console.log(buyBtn + buyDisabledBtn);
    if (buyDisabledBtn.length == 0 && buyBtn.length > 0) {
        console.log("in buy logic.");
        buyBtn[0].click();
        sureBtnClick("ok");
    } else {
        setTimeout(reload, 100);
    }
});

var searchBtnTimeout;
function sureBtnClick(className) {
    console.log("in sure btn click func.");
    var sureBtn = document.getElementsByClassName(className);
    if (sureBtn == null || sureBtn.length < 1) {
        console.log("ok btn is null.");
        if (searchBtnTimeout != null) clearTimeout(searchBtnTimeout);
        searchBtnTimeout = setTimeout(sureBtnClick, 10);
        return;
    }
    console.log("ok btn click.");
    sureBtn[0].click();
    clearTimeout(searchBtnTimeout);
}

function reload() {
    window.location.replace(window.location.href);
}