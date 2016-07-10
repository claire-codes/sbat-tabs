// JSDoc?
function getTabIds(arrayOfObjects) {
    var idArray = [];
    var originalLength = arrayOfObjects.length;
    for (var i = 0; i < originalLength; i++) {
        idArray.push(arrayOfObjects[i].id);
    }
    return idArray;
}

function reverseArray(someArray) {
    var reversedArray = [];
    var originalLength = someArray.length;
    for (var j = 0; j < originalLength; j++) {
        reversedArray.push(someArray.pop());
    }
    return reversedArray;
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
        // consider pinned?
        "currentWindow": true
    }, function(tabs) {
        var reversedTabs = reverseArray(tabs);
        var tabIds = getTabIds(reversedTabs);
        chrome.tabs.move(tabIds, {
            "index": -1
        });
    });
    console.log("I am alive");
});