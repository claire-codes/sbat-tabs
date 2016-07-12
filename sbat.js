/*
 * Take an array of objects and reduces them to an array of the corresponding
 * "id" values.
 */
function getTabIds(arrayOfTabs) {
    return arrayOfTabs.map(function(idObj) {
        return idObj.id;
    });
}

/*
 * Adds an event listener to the Chrome extension icon in the browser. Calls
 * asynchronous tabs.query() which returns an array of Tab objects in the
 * current active window. Takes the array, maps and reverses tab Ids and
 * finally moves them.
 */
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({
        "currentWindow": true
    }, function(tabs) {
        var reversedTabs = tabs.reverse();
        var tabIds = getTabIds(reversedTabs);
        chrome.tabs.move(tabIds, {
            "index": -1
        });
    });
});