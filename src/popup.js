let toggle1 = document.querySelector('#toggle-1')
let toggle2 = document.querySelector('#toggle-2')

toggle1.addEventListener('click', onSwitch('toggle-1'))
toggle2.addEventListener('click', onSwitch('toggle-2'))

function onSwitch(id) {
    let toggle = document.querySelector('#' + id)
    let toggleState = toggle.checked

    if (id === 'toggle-1') {
        chrome.storage.sync.set({enabled: toggleState})
        console.log(toggleState)
        return toggleState = null
    }
    if (id === 'toggle-2') {
        chrome.storage.sync.set({allowCalc: toggleState})
        console.log(toggleState)
        return toggleState = null
    }
}