const numberCount = () => {
  let btn = document.getElementById('btn_count')
  let init = document.getElementById('start')
  let end = document.getElementById('end')
  let step = document.getElementById('step')
  let res = document.getElementById('res')

  btn.addEventListener('click', () => {
    if (init.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
      alert('Faltam dados')
    } else {
      res.innerHTML = "Contando: "
      let count = 0;
      let i = Number(init.value)
      let e = Number(end.value)
      let s = Number(step.value)

      if(i < e) {
        for (count = i; count <= e; count += s) {
        res.innerHTML += ` ${count} \u{1F449}`  
      }
    
    } else {
        for (count = i; count >= e; count -= s) {
        res.innerHTML += ` ${count} \u{1F449}`
        }
    }

     res.innerHTML += `\u{1F3C1}`
    }
  })
}