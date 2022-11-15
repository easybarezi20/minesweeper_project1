
const grid = document.querySelector('.grid')
let width = 10
let bombAmount = 20
let squares = []

    //function to create the baord 
    function createBoard() {
        //shuffle bombs on the grid
        //creates two arrays one with 20 bombs and one with 80 safe spaces
        const bombArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('safe')
        console.log(bombArray)
        console.log(emptyArray)

        //creates the grid baord while also storing each div into an array
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()

    console.log(squares)
