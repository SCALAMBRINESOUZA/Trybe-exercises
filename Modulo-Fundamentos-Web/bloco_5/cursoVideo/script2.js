const multiply = () => {
  let n1 = Number(document.getElementById('input_number').value)
  let txt_area = document.getElementById('show_tabuada')
  let multiply = 0;
  txt_area.innerHTML = ''
  for(let i = 0; i <= 10; i += 1) {
    multiply = n1 * i
    let item = document.createElement('option')
    item.text = ` ${n1} x ${i} = ${multiply}`
    txt_area.appendChild(item)
  }
}