

function setup() {
    noCanvas()

    let userInput = select("#userInput")
    userInput.input(changeText)


    function changeText() {

        let params = {
            active: true,
            currentWindow: true
        }

        chrome.tabs.query(params, gotTab)

        function gotTab(tabs) {
            // let message = userInput.value()
    
            let msg = {
                text: userInput.value()
            }
        
        
            chrome.tabs.sendMessage(tabs[0].id, msg)
            
        }



    


    }
}