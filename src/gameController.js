import{Ship,Gameboard,Player} from './ship.js';

function controlGame(){

    const player1Name = 'Your'
    const player2Name = 'Computer';

    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);
    let player1Board = document.getElementById('player1Board');
    let player2Board = document.getElementById('player2Board');
    let currentPlayer = player1;

    const makeComputerMove = (attacker,defender) => {
        if(defender.playingBoard.totalShips === 0) return;

        let row = Math.floor(Math.random() * (10-0)) + 0;
        let col = Math.floor(Math.random() * (10-0)) + 0;
        const computerTargetBoard = defender.playingBoard.board;
        while(computerTargetBoard[row][col].hasHit === true){
             row = Math.floor(Math.random() * (10-0)) + 0;
             col = Math.floor(Math.random() * (10-0)) + 0;
        }
        if(computerTargetBoard[row][col].filledShip === null){
        const cell = document.querySelector(`.cell[data-x="${row}"][data-y="${col}"]`);
        handleClick(attacker,defender,row,col,cell);
        }else{
            const cell = document.querySelector(`.cell[data-x="${row}"][data-y="${col}"]`);
            handleClick(attacker,defender,row,col,cell);
            row = Math.floor(Math.random() * (10-0)) + 0;
            col = Math.floor(Math.random() * (10-0)) + 0;
            while(computerTargetBoard[row][col].hasHit === false && computerTargetBoard[row][col].filledShip !== null){
                const cell = document.querySelector(`.cell[data-x="${row}"][data-y="${col}"]`);
                handleClick(attacker,defender,row,col,cell);
                row = Math.floor(Math.random() * (10-0)) + 0;
                col = Math.floor(Math.random() * (10-0)) + 0;
            }
            if(computerTargetBoard[row][col].filledShip !== null){
                makeComputerMove(attacker,defender);
            }else if(computerTargetBoard[row][col].hasHit === false){
                const cell = document.querySelector(`.cell[data-x="${row}"][data-y="${col}"]`);
                handleClick(attacker,defender,row,col,cell);
            }else{
                makeComputerMove(attacker,defender);
            }
            
        }
    };

                                            const updateBoardState = (player1Board,player2Board) => {
                                                const player1Cells = player1Board.querySelectorAll('.cell');
                                                const player2Cells = player2Board.querySelectorAll('.cell2');
                                                
                                                
                                                player1Cells.forEach(cell => {
                                                    cell.classList.toggle('inactive', currentPlayer === player1);
                                                });
                                                player2Cells.forEach(cell2 => {
                                                    cell2.classList.toggle('inactive',currentPlayer === player2);
                                                });
                                            };

                                            const handleClick = (attacker,defender,row,col,cell) => {
                                                if(defender.playingBoard.board[row][col].hasHit === true){
                                                    alert('This cell already clicked!!, Try another');
                                                    return;
                                                }
                                                defender.playingBoard.receiveAttack({x:row,y:col});
                                                if(defender.playingBoard.board[row][col].filledShip === null){
                                                    cell.classList.add('target-miss');
                                                    currentPlayer = (currentPlayer === player1) ? player2 : player1;
                                                    setTimeout(() => {updateBoardState(player1Board,player2Board)},200);
                                                    
                                            
                                                }else if(defender.playingBoard.board[row][col].filledShip !== null){
                                                    cell.classList.add('target-hit');
                                                
                                                }
                                                if(defender.playingBoard.totalShips === 0){
                                                    setTimeout(() => {
                                                        alert(` Congratulations!! ${currentPlayer.name}, You won the game.`);},
                                                        100);
                                                    const player1Board = player1.playingBoard.board;
                                                    const player2Board = player2.playingBoard.board;
                                                    const player1Cells = document.querySelectorAll('.cell');
                                                    const player2Cells = document.querySelectorAll('.cell2');
                                                    player1Cells.forEach(cell => {
                                                        cell.classList.add('inactive');
                                                    });
                                                    player2Cells.forEach(cell2 => {
                                                        cell2.classList.add('inactive');
                                                    });

                                                    const play = document.getElementById('play-button');
                                                    play.classList.add('inactive');
                                                    

                                                    return;
                                                }
                                                
                                            };

    const renderBoards = (player1,player2) => {
        const player1Array = player1.playingBoard.board;
        const player2Array = player2.playingBoard.board;

        let player1Board = document.getElementById('player1Board');
        let player2Board = document.getElementById('player2Board');

        player1Board.innerHTML = '';
        player2Board.innerHTML = '';

        const rows = player1Array.length;
        const cols = player1Array[0].length;

        player1Board.style.gridTemplateRows = `repeat(${rows},40px)`;
        player1Board.style.gridTemplateColumns = `repeat(${cols},40px)`;
        player2Board.style.gridTemplateRows = `repeat(${rows},40px)`;
        player2Board.style.gridTemplateColumns = `repeat(${cols},40px)`;

        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                const cell = document.createElement('div');
                cell.dataset.x =  `${row}`;
                cell.dataset.y = `${col}`;
                cell.classList.add('cell');
                
                
                player1Board.appendChild(cell);

                const cell2 = document.createElement('div');
                cell2.dataset.x = `${row}`;
                cell2.dataset.y = `${col}`;
                cell2.classList.add('cell2');
                
                cell2.addEventListener('click',() => {
                        handleClick(player1, player2, row, col, cell2);
                        if(currentPlayer !== player1)
                        setTimeout(() => {makeComputerMove(player2,player1)},600);
        
                });
                player2Board.appendChild(cell2);
            }
        }
                                                    const player1Cells = document.querySelectorAll('.cell');
                                                    const player2Cells = document.querySelectorAll('.cell2');
                                                    
                                                    player2Cells.forEach(cell2 => {
                                                        cell2.classList.add('inactive');
                                                    });
        

        const player1Space = document.getElementById('player1-space');
        const player2Space = document.getElementById('player2-space');
        const nameOfPlayer1 = document.createElement('h3');
        nameOfPlayer1.textContent = `${player1Name} Base`;
        const nameOfPlayer2 = document.createElement('h3');
        nameOfPlayer2.textContent = `${player2Name}'s Base`;
        player1Space.appendChild(nameOfPlayer1);
        player2Space.appendChild(nameOfPlayer2);

        const swapCellProperties = (firstCell,secondCell) => {
            const tempClassList = Array.from(firstCell.classList);
            firstCell.className = secondCell.className;
            secondCell.className = tempClassList.join(' ');
            const tempData = {...firstCell.dataset};
            firstCell.dataset.x = secondCell.dataset.x;
            firstCell.dataset.y = secondCell.dataset.y;
            secondCell.dataset.x = tempData.x;
            secondCell.dataset.y = tempData.y;
        }
        let firstCell = null, secondCell = null;
        const handleDoubleClick = (event) => {
            const cell = event.target;

            if(firstCell === null){
                firstCell = cell;
                return;
            }
            else secondCell = cell;

            console.log(`Selected cell at: ${cell.dataset.x},${cell.dataset.y}`);
            swapCellProperties(firstCell,secondCell);
            firstCell = null;
            secondCell = null;
        };
       
        player1Board.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener("click", handleDoubleClick);
        });
    };
    
    const highlightBorder = (player1) => {
        const player1Board = player1.playingBoard.board;
        const player1Cells = document.querySelectorAll('.cell');
        player1Cells.forEach(cell => {
            const x = parseInt(cell.dataset.x,10);
            const y = parseInt(cell.dataset.y,10);
            if(player1Board[x][y].filledShip !== null){
                cell.classList.add('highlightBorder');
            }
        });
    };
    const highlightBorder2 = (player2) => {
        const player2Board = player2.playingBoard.board;
        const player2Cells = document.querySelectorAll('.cell2');
        player2Cells.forEach(cell => {
            const x = parseInt(cell.dataset.x,10);
            const y = parseInt(cell.dataset.y,10);
            if(player2Board[x][y].filledShip !== null){
                cell.classList.add('highlightBorder');
            }
        });
    };
    const unhighlightCells = () => {
        const player1Cells = player1Board.querySelectorAll('.cell');
        const player2Cells = player2Board.querySelectorAll('.cell2');
        player1Cells.forEach(cell => {
            cell.classList.remove('highlightBorder');
        });
        player2Cells.forEach(cell => {
            cell.classList.remove('highlightBorder');
        });
    };

    renderBoards(player1,player2);

    const play = document.getElementById('play-button');
    
    
    const handleClickEvent = () => {
        updateBoardState(player1Board,player2Board);
        unhighlightCells();
    }
    play.addEventListener('click',() => handleClickEvent());

    

    const ship1 = new Ship(3);
    const ship2 = new Ship(4);
    const ship5 = new Ship(2)
    player1.playingBoard.placeShip(ship1,{x:1,y:1},'horizontal');
    player1.playingBoard.placeShip(ship2,{x:5,y:5},'horizontal');
    player1.playingBoard.placeShip(ship5,{x:0,y:8},'vertical');


    const ship3 = new Ship(4);
    const ship4 = new Ship(3);
    const ship6 = new Ship(2);
    player2.playingBoard.placeShip(ship3,{x:2,y:2},'horizontal');
    player2.playingBoard.placeShip(ship4,{x:3,y:7},'horizontal');
    player2.playingBoard.placeShip(ship6,{x:8,y:8},'vertical');


    highlightBorder(player1);
    


}
controlGame();