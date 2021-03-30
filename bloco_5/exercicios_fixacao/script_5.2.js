const title = document.createElement('h1');
title.innerText = ' Exercício 5.2 - JavaScript DOM';
title.setAttribute('class', 'headers');
document.body.appendChild(title);    

const dadContainer = document.createElement('div'); 
dadContainer.setAttribute('class', 'main-content');
document.body.appendChild(dadContainer);

const childContainer = document.createElement('div');
childContainer.setAttribute('class', 'center-content');
dadContainer.appendChild(childContainer);

