const spanNumero = document.querySelector('.numero')
const btnAumentar = document.querySelector('.aumentar')
const btnDiminuir = document.querySelector('.diminuir')
const btnResetar = document.querySelector('.resetar')

let count = 0;

function inc() {
  spanNumero.textContent = count++
}

function reset() {
    count = 0
    spanNumero.textContent = count;
}

function dec() {
    spanNumero.textContent = count--
}


btnAumentar.addEventListener('click', () => {
    inc()
})

btnDiminuir.addEventListener('click', () => {
    dec()
})

btnResetar.addEventListener('click', () => {
    reset()
})


