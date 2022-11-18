
const grid = document.querySelector('.grid')

let bombAmount = 20
let squares = []

//function to create the baord 
function createBoard() {
    //shuffle bombs on the grid
    //creates two arrays one with 20 bombs and one with 80 safe spaces
    const bombArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(100 - bombAmount).fill('safe')
   
    //joining the two bomb and safe arrays into one
    const gameArray = emptyArray.concat(bombArray)
 
    //creating gae board array with sorted value everytime 
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
 

    //creates the grid baord while also storing each div into an array
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div')
        square.setAttribute('id', i)
        square.classList.add(shuffledArray[i])
        grid.appendChild(square)
        squares.push(square)
    }
    // for loop to figure out how to add a number to the square. 
    // will be reasigning a new type to the divs with the total number of bombs around them.
    for (let i = 0; i < squares.length; i++) {
        let totalBombs = 0
        //dont wan the sqaure if its to the very rigth or left to count the square that it wraps to.
        // this one checks if the number is divisble by ten 
        const isLeftEdge = i % 10 === 0
        // this ome checks if the number leaves a remainder of 9 meaning its on the right edge
        const isRigthEdge = i % 10 === 9
        if (squares[i].classList.contains('safe')) {
            //left
            if (!isLeftEdge && i > 0 && squares[i - 1].classList.contains('bomb')) totalBombs++;
            //right
            if (!isRigthEdge && i >= 0 && squares[i + 1].classList.contains('bomb')) totalBombs++;
            //bottom
            if (i < 90 && squares[i + 10].classList.contains('bomb')) totalBombs++;
            //top
            if (i > 9 && squares[i - 10].classList.contains('bomb')) totalBombs++;
            //top left except 0-9
            if (!isLeftEdge && i >= 11 && squares[i - 11].classList.contains('bomb')) totalBombs++;
            //top right except 0-9
            if (i >= 10 && i < 99 && !isRigthEdge && squares[i - 9].classList.contains('bomb')) totalBombs++;
            //bottom left except outer edge
            if (!isLeftEdge && i <= 89 && squares[i + 9].classList.contains('bomb')) totalBombs++;
            //bottom rigth except outer edge
            if (!isRigthEdge && i < 89 && squares[i + 11].classList.contains('bomb')) totalBombs++;

            squares[i].setAttribute('data', totalBombs)
            
        }

    }

}
createBoard()


const safeBtn = document.querySelectorAll(".safe")

safeBtn.forEach(cell => {
    cell.addEventListener('click', () => {
        cell.innerHTML = cell.getAttribute('data')
        cell.style.backgroundColor = 'white';
    })
})

const bombBtn = document.querySelectorAll('.bomb')

bombBtn.forEach(cell => {
    cell.addEventListener('click', () => {
        cell.innerHTML = '&#128163'
        cell.style.backgroundColor = 'red'
        window.location.reload();
    })
})



