(function() {
	function init() {
        // Change icon
        const icon = document.querySelector('.hm-calc');
        icon.classList.remove('red');
        icon.classList.add('green');

	    // Not using this as hegarty disables the input. More info in issues #1 and #2.
        // document.body.innerHTML = document.body.innerHTML.replace(/Do not use a calculator/g, "You may use a calculator");

        // Change calculator text
        const listItem = document.getElementByClassName("Assessment__meta").firstChild;
    }
    init()
})();
