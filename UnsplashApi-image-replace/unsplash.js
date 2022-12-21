console.log("Unsplash has started running");


let imgs = document.getElementsByTagName('img')

console.log('====================================');
console.log(imgs);
console.log('====================================');


async function main() {
  const accesskey = "9_J1_zmdPWz3LX7d2Qd3gcuj29txg6NRb3V0hxCc1_U";
  const locate = `https://api.unsplash.com/search/photos?client_id=${accesskey}&query=kittens`;
  const fetchData = async () => {
      const endpoint = locate;
      const response = await fetch(endpoint);
      return await response.json();
  }
  
  try {
      const data = await fetchData()
      console.log(data.results)
      const results = data.results

      for (const img of imgs) {
        let randomRangefrom1to8 = Math.floor(Math.random() * results.length)

        let replace = results[randomRangefrom1to8]?.urls?.regular

        img.width = img.width

        img.height = img.height

        img.src = replace


        console.log(replace);
      }


  
  } catch (error) {
      console.error(error)
  }
}

main();

console.log(imgs);
