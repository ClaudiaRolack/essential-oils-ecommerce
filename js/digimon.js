/* MI DIGIMON FAVORITO */
async function getDigimon () {
    const response = await fetch("https://www.digi-api.com/api/v1/digimon/gomamon");
    const gomamon = response.json();
    return gomamon;
  }
  
  async function showDigimon() {
    const containerDigimon = document.querySelector("#container__digimon");
    getDigimon()
    .then(data => {
      console.log(data.images[0].href)
      containerDigimon.innerHTML = `<img src="${data.images[0].href}" />`;
    })
    .catch(error => containerDigimon.innerHTML = '<p>No encontramos la imagen</p>');
  
  }
  showDigimon()