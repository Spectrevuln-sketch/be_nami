import { SendCost } from './background'

window.nami_support = {
    ...(window.nami_support || {}),
    SendCost: () => SendCost(),
    _events: {},
}


new CustomEvent('namiWallet', {
    ...(window.nami_support || {}),
    SendCost: () => SendCost(),
    _events: {},
})
window.addEventListener('namiWallet', function (e) {
    console.log(e)
})

window.postMessage('data send', window.origin)

console.log('Hai web page')