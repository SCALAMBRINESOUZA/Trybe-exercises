function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


const daysOfList = document.querySelector('#days')

function createListOfDaysOfTheWeek() {
    for (let i = 0; i < dezDaysList.length; i += 1) {
        const daysOfWeek = document.createElement('li')
        daysOfWeek.innerHTML = dezDaysList[i]
        if (daysOfWeek.innerHTML == 24 || daysOfWeek.innerHTML == 31 || daysOfWeek.innerHTML == 25) {
            daysOfWeek.setAttribute('class', 'day holiday')
        }

        if (daysOfWeek.innerHTML == 4 || daysOfWeek.innerHTML == 11 || daysOfWeek.innerHTML == 18 || daysOfWeek.innerHTML == 25) {
            daysOfWeek.setAttribute('class', 'day friday')

        }
        if (daysOfWeek.innerHTML == 25) {
            daysOfWeek.setAttribute('class', 'day friday holiday')
        }

        daysOfList.appendChild(daysOfWeek)
    }
}

createListOfDaysOfTheWeek()

const div = document.querySelector('.buttons-container')
const btn = document.createElement('button')

function showButton(string) {
    btn.setAttribute('id', 'btn-holiday')
    btn.innerHTML = string
    div.appendChild(btn)
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    btn.addEventListener('click', () => {
        const holidays = document.querySelectorAll('.holiday')
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.background === setNewColor) {
                holidays[i].style.backgroundColor = backgroundColor;
            } else {
                holidays[i].style.background = setNewColor;
            }
        }
    })
}

showButton('Feriados')

function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

function displayFridays() {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
    let dezFridays = [4, 11, 18, 25];

    getFridayButton.addEventListener('click', function () {
        for (let index = 0; index < fridays.length; index += 1) {
            fridays[index].innerHTML !== newFridayText ? fridays[index].innerHTML = newFridayText : fridays[index].innerHTML = dezFridays[index]
        }
    })
};

function moreZoom() {
    daysOfList.addEventListener('mouseover', (e) => {
        e.target.style.fontSize = '40px'
    })
}

function backToDefault() {
    daysOfList.addEventListener('mouseout', (e) => {
        e.target.style.fontSize = '20px'
    })
}

function myTasks(task) {
    const div = document.querySelector('.my-tasks')
    const createTask = document.createElement('span')
    createTask.textContent = task
    div.appendChild(createTask)
}

function createColor(color) {
    const div = document.createElement('div')
    const parentDiv = document.querySelector('.my-tasks')
    div.className = 'task'
    div.style.background = color
    parentDiv.appendChild(div)

    div.addEventListener('click', () => {
        let classSelected = div.getAttribute('class')
        if (classSelected == 'task') {
            div.setAttribute('class', 'task selected')
        } else {
            div.className = 'task'
        }
    })

    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', function (event) {
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    })
}

function myCommitment() {
    const input = document.getElementById('task-input')
    const ul = document.getElementsByClassName('task-list')[0]
    const btn = document.getElementById('btn-add')

    btn.addEventListener('click', () => {
        let li = document.createElement('li')
        if (input.value === '') {
            alert('Erro Digite um compromisso')
        }
        li.innerHTML = input.value
        ul.appendChild(li)
    })
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            let li = document.createElement('li')
            li.innerHTML = input.value
            ul.appendChild(li)
            input.value = ''
        }
    })
}

myTasks(`Wake up`)
displayFridays();
moreZoom()
backToDefault()
createColor('yellowgreen')
myCommitment()
