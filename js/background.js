// 要阻塞的网络请求url规则
var blockUrl = [
    "*://*.baidustatic.com/*"
];
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        console.log("ddd");
        return {cancel: true};
    },
    {urls: blockUrl},
    ["blocking"]
);