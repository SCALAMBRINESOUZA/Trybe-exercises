var paragraph = document.getElementById("paragraph");
    paragraph.style.color = "red";

let title = document.querySelector('#page-title');
    title.innerText = 'Bullet';
    
let secondParagraph = document.querySelector('#second-paragraph');
    secondParagraph.innerHTML = "HELLO WORLD DOM"

let subTitle = document.querySelector('#subtitle');
    subTitle.innerText = 'Let´s go learn javascript'    
    subTitle = document.getElementsByTagName('h4')[0];
    subTitle.innerText = 'Let´s go learn html css and javascript' 

let paragraphs = document.getElementsByClassName('par');
for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.color = 'blue' 
    paragraphs[0].style.background = 'gray' 
}    

