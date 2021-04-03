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
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  const days = document.getElementById('days');

const diasMes = () => {
  
  for(let day = 0; day < dezDaysList.length; day += 1 ) {
      const daysMonth = dezDaysList[day];
      const daysItem = document.createElement('li');
      daysItem.setAttribute('class', 'day');
      daysItem.innerHTML = daysMonth;
      days.appendChild(daysItem);

      
      if (daysItem.innerHTML == 24 || daysItem.innerHTML == 31) {
          daysItem.setAttribute('class', 'day holiday');   
        }
 
      if (daysItem.innerHTML == 4 || daysItem.innerHTML == 11 || daysItem.innerHTML == 18) {
          daysItem.setAttribute('class', 'day friday');  
        }
        
      if (daysItem.innerHTML == 25) {
          daysItem.setAttribute('class', 'day holiday friday');
      }  
     
  }

}

    const btn = document.querySelector('.buttons-container');
    const btnHoliday = document.createElement('button');
 
const holidays = (feriados) => {
    btnHoliday.setAttribute('id', 'btn-holiday');
    btnHoliday.textContent = feriados
    btn.appendChild(btnHoliday)
 

    btnHoliday.addEventListener('click', () => {
        const holidays = document.querySelectorAll('.holiday');
        for(let i = 0; i < holidays.length; i += 1){
            if (holidays[i].style.backgroundColor === 'gray') {
                holidays[i].style.backgroundColor = '#eee';
                holidays[i].style.color = 'gray'
            } else {
                holidays[i].style.backgroundColor = 'gray';
                holidays[i].style.color = 'green'
            }
        }
    })    
 }
const fridays = (sextas) => {
       const btnFriday = document.createElement('button');
       btnFriday.textContent = sextas;
       btn.appendChild(btnFriday);
    
       const daysFridays = [4, 11, 18, 25 ]; 
       btnFriday.addEventListener('click', () => {
      const fridays = document.querySelectorAll('.friday');
      for(let i = 0; i < fridays.length; i += 1) {
        if (fridays[i].innerHTML !== 'Sextou') {
            fridays[i].innerHTML = 'Sextou';
        } else {
            fridays[i].innerHTML = daysFridays[i]
        }          
        
      }  
    })   

}

const moreZoom = () => {
        days.addEventListener('mouseover', (el) => {
            el.target.style.fontSize = '30px';
            el.target.style.fontWeight = '600';
        })             
    }  


const outZoom = () => {
        days.addEventListener('mouseout', (el) => {
            el.target.style.fontSize = '20px';
            el.target.style.fontWeight = '200';
        })

    }

    const myTasks = document.querySelector('.my-tasks');
    const elSpan = document.createElement('span');

    const tasks = (tarefa) => {
        elSpan.innerHTML = tarefa;
        elSpan.style.color = 'blue';
        elSpan.style.fontSize = '40px';
        myTasks.appendChild(elSpan);
    }

    
    fridays('Sexta-Feira')
    diasMes();
    holidays('Feriados');
    moreZoom();
    outZoom();
    tasks('Projetos')