const board = document.querySelector('#board')
const colors = ['#085EF7', '#0006F7', '#6200F7', '#B600F7', '#EF00F7', '#F700BA', '#F70074']
const SQUARES_NUMBER = 900

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    
    square.addEventListener('mouseover', () => 
        setColor(square))
    
    square.addEventListener('mouseleave', () =>
        removeColor(square))
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex]
}