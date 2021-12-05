// ./dipExample.js

// const fetch = require('node-fetch');

// const url = 'https://icanhazdadjoke.com';

// const requestWithFetch = () => {
//   fetch(url, {
//     headers: new fetch.Headers({
//       Accept: 'application/json',
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data.joke))
//     .catch((err) => console.log(err));
// };

// const getJokes = (numberOfJokes) => {
//   for (let i = 0; i < numberOfJokes; i += 1) requestWithFetch();
// };

// getJokes(5);

// module.exports = { getJokes };

const axios = require('axios').default;

const url = 'https://icanhazdadjoke.com';

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};

const getJokes = (numberOfJokes, jokeRequester) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
};

getJokes(5, requestWithAxios);

module.exports = { getJokes };