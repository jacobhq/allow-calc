function init() {
    const icon = document.querySelector('.hm-calc');
    const ul = document.querySelector('ul.Assessment__meta li:nth-child(1)')
    icon.classList.remove('red');
    icon.classList.add('green');
    ul.innerHTML = ul.innerHTML.replace(/Do not use a calculator/g, "You may use a calculator");
}

chrome.storage.sync.get(['enabled'], function (result) {
    let isTrueSet = (result.enabled === 'true')
    console.log(isTrueSet)
    if (isTrueSet) return init()
});
