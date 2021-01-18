// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	function removeElements() {
		const icon = document.getElementsByClassName('hm-calc red');
		const noCalc = document.getElementsByClassName('Assessment__meta');
		icon.parentNode.removeChild(icon);
	}
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... giggity');

})();
