const renderCountry = (country) => {
  listOrder = document.createElement('ul');
  itemList = document.createElement('li')
  const span = document.createElement('span')
  const img = document.createElement('img')
  
  img.setAttribute('class', 'image')
  img.src = country.flag
  document.body.appendChild(listOrder)
  span.innerHTML = `${country.nativeName} - ${country.capital}`  
  
  itemList.appendChild(img)
  itemList.appendChild(span)
  listOrder.appendChild(itemList);
    
}


const myFetch = (names) => fetch(`https://restcountries.eu/rest/v2/name/${names}`)
    .then((response) => response.json())
      .then((countries) => {
            renderCountry(countries[0])
      })



const fetchCountry = async () => {
    try{
    await myFetch('Brazil')
    await myFetch('Angola')
    await myFetch('Nigeria')
    await myFetch('Fiji')
    await myFetch('Cuba')               
    } catch(_error) { alert('Ocorreu um erro ao buscar pais')}
}


window.onload = fetchCountry();
