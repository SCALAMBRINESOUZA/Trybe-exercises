const renderCountry = (country) => {
  listOrder = document.createElement('ul');
  document.body.appendChild(listOrder)
  itemList = document.createElement('li')
  listOrder.appendChild(itemList);
  itemList.innerHTML = `${country.nativeName} - ${country.capital}`  

}

const fetchCountry = names => {
    fetch(`https://restcountries.eu/rest/v2/name/${names}`)
        .then((response) => {
            response.json()
                .then((countries) => {
                   renderCountry(countries[0]) 
                fetch('https://restcountries.eu/rest/v2/name/brazil')
                .then((response) => {
                    response.json()
                        .then((countries) => {
                           renderCountry(countries[0]) 
                })
            })
        })        
    });
}

window.onload = fetchCountry('Germany');
