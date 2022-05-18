const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


firstLi.addEventListener('click', clickedLi)
secondLi.addEventListener('click', clickedLi)
thirdLi.addEventListener('click', clickedLi)


function clickedLi(e) {
  const element = document.querySelector('.tech')
  element.classList.remove('tech')
  e.target.classList.add('tech');
}

input.addEventListener('change', (e) => {
  const element = document.querySelector('.tech')
  element.innerText = e.target.value
  // e.target.style.color = 'white'
})

myWebpage.addEventListener('dblclick',() => {
  window.open('https://scalambrinesouza.github.io/', '_blank')
})

myWebpage.addEventListener('mouseover', (e) => {
  e.target.style.color = 'red';
})

myWebpage.addEventListener('mouseout', (e) => {
  e.target.style.color = 'unset';
})
