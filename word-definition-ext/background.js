console.log('background script running');

chrome.runtime.onMessage.addListener(receiver)

window.word = "background"

function receiver(request, sender, sendResponse) {

    word = request.text
    console.log(request);
}



