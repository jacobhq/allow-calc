// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	function removeElements() {
        const icon = document.querySelector('.hm-calc');
        const container = document.querySelector('.Assessment__meta ul li');
        icon.classList.remove('red');
        icon.classList.add('green');
    }
    removeElements()

	alert('inserted self... giggity');

})();
