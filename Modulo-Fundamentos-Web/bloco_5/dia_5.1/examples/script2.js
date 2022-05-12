// document.getElementById('container').style.background = 'gray'

document.getElementById('header-container').style.background = 'rgb(14, 181, 110)'

document.getElementsByClassName('emergency-tasks')[0].style.background = 'rgb(243, 165, 143)'

document.getElementsByClassName('no-emergency-tasks')[0].style.background = 'rgb(255, 231, 96)'

// let firstsh3 = document.getElementsByTagName('h3')
// for (let i = 0; i < firstsh3.length; i += 1) {
//     firstsh3[0].style.background = 'blue'
//     firstsh3[1].style.background = 'blue'
// }
let tasksUrgent = document.querySelectorAll('.emergency-tasks h3')
for(let i = 0; i < tasksUrgent.length; i += 1 ) {
   tasksUrgent[0].style.background = 'magenta'
   tasksUrgent[1].style.background = 'magenta'
    
}

let tasksNoUrgent = document.getElementsByTagName('h3')
for (let i = 0; i < tasksNoUrgent.length; i += 1) {
    tasksNoUrgent[2].style.background = 'black'
    tasksNoUrgent[3].style.background = 'black'
}

let footer = document.querySelector('#footer-container').style.background = 'rgb(1, 43, 25)'

let p = document.createElement('p')
p.innerText = 'Administrador de tempo finalizado.'
p.style.color = 'rgb(1, 21, 4)'
p.style.fontWeight = 'bold'
p.style.margin = '13px'
p.id = 'par'
document.body.appendChild(p)
