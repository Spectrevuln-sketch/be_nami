

chrome.runtime.sendMessage({ name: 'send_cost', data: 'bla' }, (response) => {
    console.log(response)
})



window.nami_sender = {
    ...(window.nami_sender || {}),
    SendCost: () => SendCost(),
    _events: {},
}


console.log('Content Script')