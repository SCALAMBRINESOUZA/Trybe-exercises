const btn = document.getElementById('btnClick')
let spn = document.getElementById('count')
let clickCount = 0
btn.addEventListener('click', () => {
    spn.innerText = clickCount += 1;
});

