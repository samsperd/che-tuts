console.log(" Ex-kitten-sion");

    let filenames = [
        "kitten1.jpg",
        "kitten2.jpg",
        "kitten3.jpg",
        "kitten4.jpg",
        "kitten5.jpg",
        "kitten6.jpg",
        "kitten7.jpg"
    ]

    let imgs = document.getElementsByTagName('img')

    for (const imgElement of imgs) {
        // console.log(imgElement.src);

        let r = Math.floor(Math.random() * filenames.length)

        let file = 'kittens/' + filenames[r]

        let url = chrome.extension.getURL(file)

        imgElement.src = url

        console.log(url);
    }








    // "web_accessibe_resources": [
    //     "kitten1.jpg",
    //     "kitten2.jpg",
    //     "kitten3.jpg",
    //     "kitten4.jpg",
    //     "kitten5.jpg",
    //     "kitten6.jpg",
    //     "kitten7.jpg"
    // ]
