(function() {
	function init() {
        const icon = document.querySelector('.hm-calc');
        icon.classList.remove('red');
        icon.classList.add('green');
        document.body.innerHTML = document.body.innerHTML.replace(/Do not use a calculator/g, "You may use a calculator");
    }
    init()
})();
