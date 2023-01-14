

console.log('====================================');
console.log('Popup opened');
console.log('====================================');

let bgPage = chrome.extension.getBackgroundPage()

let word = bgPage.word;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
		'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
	}
};

fetch(`https://urban-dictionary7.p.rapidapi.com/v0/define?term=${word}`, options)
	.then(response => response.json())
	.then(response => {
        if (response.list[0].definition === "") {
            document.getElementById("root").innerHTML = "Shocking! Word not found in Urban Dictionary. Please narrow your selection to its simpler form or use its synonyms."
            
        } else {
            document.getElementById("root").innerHTML = response.list[0].definition
            document.getElementById("root").style['fontSize'] = '14px'
            
        }
        console.log(response)

        console.log(response.list[0].definition)
    })
	.catch(err => console.error(err));


console.log(word);