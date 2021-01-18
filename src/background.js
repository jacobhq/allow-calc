// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	var hegarty = false;
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        alert(tabs[0]);
    });
	if (hegarty) {
		chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		});
	}
	else {
		alert('You need to be in a hegartymaths assesment to use this extension.');
	}
});
