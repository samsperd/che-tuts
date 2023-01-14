console.log("Chome Extension Ready to Go!");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, senderResponse) {
    console.log(message.text);
    let paragraphs = document.getElementsByTagName('p')
    
    for (const element of paragraphs) {
        element.innerHTML = message.text
    }
        
}