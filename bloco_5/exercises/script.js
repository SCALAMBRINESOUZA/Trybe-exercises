document.getElementById('container').style.backgroundColor = '#C0C0C0';

document.getElementById('header-container').style.background = '#3CB371';

document.getElementById('header-container').style.color = 'white';

document.getElementById('header-container').style.textAlign = 'center';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#F08080	';

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#DAA520';

document.getElementById('footer-container').style.backgroundColor = '#2F4F4F';

document.querySelector('.emergency-tasks div h3').style.backgroundColor = '#BA55D3';

document.querySelectorAll('h3')[1].style.backgroundColor = '#BA55D3';

document.querySelector('.no-emergency-tasks div h3').style.backgroundColor = 'black';

//document.querySelectorAll('h3')[3].style.backgroundColor = 'black';

function alteraCorUltimoElemento(ele, col){
    document.querySelectorAll(ele)[3].style.backgroundColor = col;
}

alteraCorUltimoElemento('h3' , 'black');    