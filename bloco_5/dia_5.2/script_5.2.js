const title = document.createElement('h1');
title.innerText = ' Exercício 5.2 - JavaScript DOM';
title.setAttribute('class', 'title');
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
 
const numbersOfLists = ['UM', 'DOIS', 'TRES', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE', 'DEZ'];
const list = document.createElement('ul');
for(let item = 0; item < numbersOfLists.length; item += 1) {
    let itemList = document.createElement('li');
    itemList.innerText = numbersOfLists[item];
    list.appendChild(itemList);
    thirdChildContainer.appendChild(list);
};

for(let h3s = 1; h3s < 4; h3s += 1) {
    const subtitle = document.createElement('h3');  
    subtitle.setAttribute('class', 'description')  
    dadContainer.appendChild(subtitle);
}
    
