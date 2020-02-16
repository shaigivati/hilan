chrome.browserAction.onClicked.addListener(function() {
    console.log("alert from background.js");
    chrome.tabs.executeScript({file: "jquery-2.0.2.min.js"}, function() {
        console.log("jquery Loaded");
    });
    chrome.tabs.create({ url: "https://hilanauth.bgu.ac.il/" })
    chrome.tabs.executeScript({file: "content.js"}, function() {
        console.log("content loaded");
    });
});