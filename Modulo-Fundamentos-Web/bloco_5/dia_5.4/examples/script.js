// localStorage.setItem('firstName', 'Robertão')
// localStorage.setItem('lastName', 'Souza')
// localStorage.setItem('fullName', localStorage.getItem('firstName'))

// console.log(localStorage.getItem('fullName'))
// const fullName = {
//     lastName: 'Carlos',
//     middleName: 'Henrique'
// };

// localStorage.setItem('Name', JSON.stringify(fullName))
// console.log(JSON.parse(localStorage.getItem('Name')))
// localStorage.clear()

// let organization = {
//     name: 'trybe',
//     since: 2019,
// };

// let storage = localStorage

// storage.setItem('trybe', JSON.stringify(organization))
// console.log(JSON.parse(storage.getItem('trybe')))

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    const phraseText = phrasesList[listLength];
    const phrase = document.createElement('li');
    phrase.innerText = phraseText;
    list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
    const oldList = JSON.parse(localStorage.getItem('phrases'));
    const phraseText = input.value;
    oldList.push(phraseText);
    localStorage.setItem('phrases', JSON.stringify(oldList));
    insertPhraseInDOM();
}

function initialRenderization() {
    if (localStorage.getItem('phrases') === null) {
        localStorage.setItem('phrases', JSON.stringify([]));
    } else {
        const phrasesList = JSON.parse(localStorage.getItem('phrases'));
        const listLength = phrasesList.length - 1;
        for (let index = 0; index <= listLength; index += 1) {
            const listElement = document.createElement('li');
            listElement.innerText = phrasesList[index];
            list.appendChild(listElement);
        }
    }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function () {
    initialRenderization();
};


