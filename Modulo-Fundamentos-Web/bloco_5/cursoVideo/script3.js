const input = document.getElementById('input_number')
const btn = document.querySelector('#btn_add')
const results = document.querySelector('#show_results')
const btn1 = document.querySelector('#btn_fim')
const showResults = document.getElementById('center')

btn.addEventListener('click', () => {
  const vet = []
  let option = document.createElement('option')
  
    if(input.value === '') {
    alert('Campo necessario')  
  } else if(input.value <= 0 || input.value > 100) {
    alert('numero fora do padrao')
    
  } else {

    vet.push(Number(input.value))
    option.text = vet
      
    // if (input.value === option.text){
    //     alert('valor ja inserido')
    //   } else {
        results.appendChild(option)

  }

  btn1.addEventListener('click', () => {
    let sum = 0
    let cont = 0
    let average = 0
    let max = 0
    let min = 100

    for (let i = 0; i < results.length; i += 1) {
      
      const p = document.createElement('p')
      const p1 = document.createElement('p')
      cont = results.length
      
      sum += Number(results[i].value) 
      average = sum / cont
      
      if (results[i].value > max) {
        max = results[i].value 
      }
      
      if(results[i].value < min) {
        min = results[i].value
      }
      
      // ulResult.appendChild(li)
      p.innerHTML = `quantidade de digitados ${cont}`
      showResults.appendChild(p)
      p1.innerHTML = `a soma dos digitados foi: ${sum}`
      showResults.appendChild(p1)
    }

    console.log(`quantidade digitados foi: ${cont} 
  a soma dos digitados foi: ${sum}
  a media dos digitados foi: ${average}
  o maior numero dos digitados foi: ${max} 
  o menor valor dos digitados foi: ${min} ` )
})
})
