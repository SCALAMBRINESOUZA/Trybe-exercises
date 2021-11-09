// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }  
  };
    
  fetch(API_URL, myObject)
    .then((response) => {
        response.json()
            .then((joker) => {
                const h2 = document.getElementById('jokeContainer')
                    h2.innerHTML = joker.joke
            })
    } );
};

window.onload = () => fetchJoke();
