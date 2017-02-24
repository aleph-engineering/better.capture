/**
 * Created by aliuska on 2/24/17.
 */

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(tab) {
        // Tab opened.
    });
});

