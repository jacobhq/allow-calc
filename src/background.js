// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    // for the current tab, inject the "inject.js" file & execute it
    var hegarty = true
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            hegarty = true
        }
    );
	if (hegarty = true) {
        chrome.tabs.executeScript(tab.ib, {
		    file: 'inject.js'
	    });
    }
    else {
        alert("You need to be in a hegartymaths assesment to use this extension.")
    }
});
