
const grid = document.querySelector('.grid')
let bombAmount = 20
let squares = []

    //function to create the baord 
    function createBoard() {
        //shuffle bombs on the grid
        //creates two arrays one with 20 bombs and one with 80 safe spaces
        const bombArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(100 - bombAmount).fill('safe')
        console.log(bombArray)
        console.log(emptyArray)
        //joining the two bomb and safe arrays into one
        const gameArray = emptyArray.concat(bombArray)
        console.log(gameArray)
        //creating gae board array with sorted value everytime 
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
        console.log(shuffledArray)

        //creates the grid baord while also storing each div into an array
        for (let i = 0; i < 100; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)
        }
        // function to figure out how to add a number to the square. 
        // will be reasigning a nwe type to the divs with the total number of bombs around them.
        for (let i = 0; i < squares.length; i++){
            let totalBombs = 0
            //dont wan the sqaure if its to the very rigth or left to count the square that it wraps to.
            // this one checks if the number is divisble by ten 
            const isLeftEdge = i % 10 === 0
            // this ome checks if the number leaves a remainder of 9 meaning its on the right edge
            const isRigthEdge = i % 10 === 9
            if (squares[i].classList.contains('safe')){
                if(!isLeftEdge && i > 0 && squares[i - 1].classList.contains('bomb')) totalBombs++;
                if(!isRigthEdge && i > 0 && squares[i + 1].classList.contains('bomb')) totalBombs++;
                if (i < 90 && squares[i + 10].classList.contains('bomb')) totalBombs++;
                if(i > 9 && squares[i - 10].classList.contains('bomb')) totalBombs++;
                squares[i].setAttribute('data', totalBombs)
            }
            
        }

    }
    createBoard()

            const safeBtn = document.querySelectorAll(".safe")
            const bombBtn = document.querySelectorAll(".bomb") 
            console.log(safeBtn)
            safeBtn.forEach( cell => { cell.addEventListener('click', () => {console.log('safe')})})
            bombBtn.forEach( cell => { cell.addEventListener('click', () => {console.log('bomb')})})



   //automate event listener 
// 