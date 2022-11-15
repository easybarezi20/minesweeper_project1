
const grid = document.querySelector('.grid')
let width = 10
let squares = []

    //function to create the baord 
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
