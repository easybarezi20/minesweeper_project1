# Minesweeper_project1 
    Made a basic game of minesweeper where your objective it to click on 80 spaces that do not contain a bomb. Alos there <br>
    are 20 bombs scattered randomly everytime the game refreshes and to help locate bombs the number on the safe spaces indicate if a <br> bomb is around the space. After successfully locating all 80 squares you win the game. 
## Choice of game:
    MineSweeper
### Pseudocode for the overall gameplay:
    Overall steps;
    1.generate a 10x10 grid 
        - automate the rid process 
        -figure out how to populate the grid with values 
            - use an array to populate the board with a for loop
    2.figure out how to randomiz the ammount of bombs on the grid 
        - sort() and math.random randomizes an array
    3.figure out how to display the numbers if you choose a safe spot 
        - play around with using the data attribute to display the number of bombs around the square
        - using the data attribute to set how many bombs are around a safe space we can innerHTML the 
            safe space to display the data number
            -case: if the squere is on the left or rigth edge it will default to checking the row above squre
                or the row below squere since my grid has a property of wrap.
    4.if you hit a mine have the game be over 
        -flag feature if you think bomb is on the square
    5.win when you uncover all squeres without hitting a mine

#### Wireframe of main game screen 
    basic design: have a 10x10 grid in the center title ontop and a reset button

![alt text](/images/Untitled.png "wireframe")


