// My API key
var apikey = {
  key: '0b622bf3-1ae8-4882-af36-7b239a46a30f'
}

// GET fetch Rquisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
apikey.key)
.then((response) => {
  if(!response.ok) throw new Error('Erro ao executara requisição, status' + response.status);
  return response.json();
})
.then((api) => {

  var texto = "";
  // GET 10 coins and symbols
  for(let i = 0; i < 10; i ++){
    console.log(api);

    // Show API information 
    texto = texto + `
    <div class="media">
      <img src="../img/coin.jpg" class="aling-self-center mr-3 alt="coin" width="170" height="110">
      <div class="media-body">
        <h5 class="mt-2">${api.data[i].name}</h5>
        <p>${api.data[i].symbol}</p>
        <p>${api.data[i].first_historical_data}</p>
      </div>
    </div>
    `;

    document.getElementById("coins").innerHTML = texto;
  }
  
})
.catch((error) => {
  console.error(error.message);
})