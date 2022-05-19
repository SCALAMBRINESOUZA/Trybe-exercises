/*          alteraçoes de remoçao foram feitas diretas no 
          console portanto sem efeito apos a atualizaçao da pagina'
*/

const title = document.createElement('h1');
title.innerText = ' Exercício 5.2 - JavaScript DOM';
title.setAttribute('class', 'title');
document.body.appendChild(title);    

const dadContainer = document.createElement('main'); 
dadContainer.setAttribute('class', 'main-content');
document.body.appendChild(dadContainer);

const childContainer = document.createElement('section');
childContainer.setAttribute('class', 'center-content');
dadContainer.appendChild(childContainer);

const paragraph = document.createElement('p');
paragraph.innerText = 'I´m a student tryber';
childContainer.appendChild(paragraph);

const secondChildContainer = document.createElement('section');
secondChildContainer.setAttribute('class', 'left-content');
dadContainer.appendChild(secondChildContainer);

const thirdChildContainer = document.createElement('section');
thirdChildContainer.setAttribute('class', 'right-content');
dadContainer.appendChild(thirdChildContainer);

const image = document.createElement('img');
image.setAttribute('class', 'small-image');
image.src="https://picsum.photos/200";
secondChildContainer.appendChild(image);
 
const numbersOfLists = ['UM', 'DOIS', 'TRES', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE', 'DEZ'];
const list = document.createElement('ul');
list.style.listStyle = 'none'
for(let item = 0; item < numbersOfLists.length; item += 1) {
    let itemList = document.createElement('li');
    itemList.innerText = numbersOfLists[item];
    list.appendChild(itemList);
    thirdChildContainer.appendChild(list);
};

for (let headings = 1; headings < 4; headings += 1) {
    const subtitle = document.createElement('h3');  
    subtitle.setAttribute('class', 'description')  
    dadContainer.appendChild(subtitle);
} 

const namesHeadings = () => {
  let h3WithText = document.getElementsByTagName('h3')[0]
    h3WithText.innerHTML = 'hello'
    h3WithText.style.color = 'white'
    h3WithText = document.getElementsByTagName('h3')[1]
    h3WithText.innerHTML = 'world'
    h3WithText.style.color = 'white'
    h3WithText = document.getElementsByTagName('h3')[2]
    h3WithText.innerHTML = 'people'
    h3WithText.style.color = 'white'  
}
namesHeadings();  
/*  Removendo os ultimos dois elementos da lista 

 list.lastChild.remove();
 list.lastChild.remove();

 */