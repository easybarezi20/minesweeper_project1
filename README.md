# Minesweeper_project1 

## Choice of game:
    minesweeper 
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
    4.if you hit a mine have the game be over 
        -flag feature if you think bomb is on the square
    5.win when you uncover all squeres without hitting a mine

#### Wireframe of main game screen 
    basic design: have a 10x10 grid in the center title ontop and a reset button

![alt text](/images/Untitled.png "wireframe")


