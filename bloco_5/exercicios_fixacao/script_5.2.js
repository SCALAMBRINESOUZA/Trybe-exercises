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

const paragraph = document.createElement('p');
paragraph.innerText = 'I´m a student tryber';
childContainer.appendChild(paragraph);

const secondChildContainer = document.createElement('div');
secondChildContainer.setAttribute('class', 'left-content');
dadContainer.appendChild(secondChildContainer);

const thirdChildContainer = document.createElement('div');
thirdChildContainer.setAttribute('class', 'right-content');
dadContainer.appendChild(thirdChildContainer);

const image = document.createElement('img');
image.setAttribute('class', 'small-image');
image.src="https://picsum.photos/200";
secondChildContainer.appendChild(image);
