firstParagraph = document.getElementById('desc');
firstParagraph.innerText = 'Um bom programador com emprego satisfatorio';

mainContainer = document.getElementsByClassName('main-content')[0]
mainContainer.style.background = "rgb(76,164,109)";

whiteContainer = document.querySelector('.center-content');
whiteContainer.style.background = 'white';

headH1 = document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - Javascripit'

thirdParagraph = document.getElementsByTagName('p')[2]
thirdParagraph.innerText = thirdParagraph.innerText.toUpperCase();

function allParagraphs() {
 let paragraphs = document.getElementsByTagName('p')
    for (let par of paragraphs) {
        console.log(par.innerText);
    }
}
allParagraphs();