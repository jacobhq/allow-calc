// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	function removeElements() {
        const icon = document.querySelector('.hm-calc');
        icon.classList.remove('red');
        icon.classList.add('green');
        document.body.innerHTML = document.body.innerHTML.replace(/Do not use a calculator/g, "You may use a calculator");
    }
    removeElements()

	alert('inserted self... giggity');

})();
