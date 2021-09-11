/* eslint-disable no-console */
import { onMessage } from 'webext-bridge'
import { storageDemo } from '../../views/logic/storage'

// enable inject if storage says so
if (storageDemo.value.enabled) {
  const icon = document.querySelector('.hm-calc');
  const ul = document.querySelector('ul.Assessment__meta li:nth-child(1)')
  icon?.classList.remove('red');
  icon?.classList.add('green');
  ul.innerHTML = ul?.innerHTML.replace(/Do not use a calculator/g, "You may use a calculator");
}

console.info('[vitesse-webext] Hello world from content script' + storageDemo.value.enabled)
console.log('hi')

// communication example: send previous tab title from background page
onMessage('tab-prev', ({ data }) => {
  console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
})
