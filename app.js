const red = document.querySelector('#red')
const orange = document.querySelector('#orange')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const teal = document.querySelector('#teal')
const blue = document.querySelector('#blue')
const indigo = document.querySelector('#indigo')
const purple = document.querySelector('#purple')
const pink = document.querySelector('#pink')
const white = document.querySelector('#white')
const gray = document.querySelector('#gray')
const black = document.querySelector('#black')

const container = document.querySelector('.container')
const h1 = document.querySelector('h1')

function whiteHeading() {
    h1.style.color = '#edf2f4'
}

function blackHeading() {
    h1.style.color = '#2b2d42'
}

red.onclick = () => {
    container.style.backgroundColor = '#f44336'
    h1.innerText = 'Red'
    whiteHeading()
}

orange.onclick = () => {
    container.style.backgroundColor = '#ff9800'
    h1.innerText = 'Orange'
    whiteHeading()
}

yellow.onclick = () => {
    container.style.backgroundColor = '#ffc107'
    h1.innerText = 'Yellow'
    blackHeading()
}

green.onclick = () => {
    container.style.backgroundColor = '#8bc34a'
    h1.innerText = 'Red'
    whiteHeading()
}

teal.onclick = () => {
    container.style.backgroundColor = '#009688'
    h1.innerText = 'Teal'
    whiteHeading()
}

blue.onclick = () => {
    container.style.backgroundColor = '#448aff'
    h1.innerText = 'Blue'
    whiteHeading()
}

indigo.onclick = () => {
    container.style.backgroundColor = '#1565c0'
    h1.innerText = 'Indigo'
    whiteHeading()
}

purple.onclick = () => {
    container.style.backgroundColor = '#ad1457'
    h1.innerText = 'Purple'
    whiteHeading()
}

pink.onclick = () => {
    container.style.backgroundColor = '#f11172'
    h1.innerText = 'Pink'
    whiteHeading()
}

white.onclick = () => {
    container.style.backgroundColor = '#edf2f4'
    h1.innerText = 'White'
    blackHeading()
}

gray.onclick = () => {
    container.style.backgroundColor = '#8d99ae'
    h1.innerText = 'Gray'
    whiteHeading()
}

black.onclick = () => {
    container.style.backgroundColor = '#2b2d42'
    h1.innerText = 'Black'
    whiteHeading()
}