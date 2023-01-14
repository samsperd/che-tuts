console.log("Chome Extension Ready to Go!");


window.addEventListener('mouseup', wordSelection)

function wordSelection() {
    let selectedText = window.getSelection().toString().trim()

    
    if (selectedText.length > 0) {
        let message = {
            text: selectedText
        }
        
        console.log(message);
        
        chrome.runtime.sendMessage(message)
    }
}