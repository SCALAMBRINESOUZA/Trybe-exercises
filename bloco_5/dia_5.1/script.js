document.getElementById('container').style.background = 'gray'

document.getElementById('header-container').style.background = 'green'

document.getElementsByClassName('emergency-tasks')[0].style.background = 'pink'

document.getElementsByClassName('no-emergency-tasks')[0].style.background = 'yellow'

let firstsh3 = document.getElementsByTagName('h3')
for (let i = 0; i < firstsh3.length; i += 1) {
    firstsh3[0].style.background = 'blue'
    firstsh3[1].style.background = 'blue'
}

let secondh3 = document.getElementsByTagName('h3')
for (let i = 0; i < firstsh3.length; i += 1) {
    secondh3[2].style.background = 'black'
    secondh3[3].style.background = 'black'
}

let footer = document.querySelector('#footer-container').style.background = 'green'

let p = document.createElement('p')
p.innerText = 'Administrador de tempo finalizado.'
p.id = 'par'
document.body.appendChild(p)






