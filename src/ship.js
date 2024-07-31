class Ship{
    constructor(length,timesHit = 0,sunk = false){
        this.length = length;
        this.timesHit = timesHit;
        this.sunk = sunk;
    }
    hit(){
        this.timesHit++;
        if(this.timesHit === this.length){
            this.sunk = true;
        }
    }
    isSunk(){
        if(this.timesHit >= this.length){
            return true;
        }
        return false;
    }
}
class Gameboard{
    constructor(size){
        this.size = size;
        this.board = this.createBoard(size);
        this.missedAttack = new Set();
        this.totalShips = 0;
    }
    createBoard(){
        return Array.from({length: this.size},() => Array.from({length: this.size},() => ({filledShip:null, hasHit:false})));
    }
    placeShip(ship,cord,align){
        const x = cord.x;
        const y = cord.y;
        if(x>=this.size ||y>= this.size || x<0 || y<0){
            return;
        } 
        if(align === 'horizontal'){
            if(x+ship.length-1 >= this.size) alert('Enter ship within the board');
            for(let i=x;i<x+ship.length;i++){
                this.board[i][y].filledShip = ship;
            }
            this.totalShips++;
        }else if(align === 'vertical'){
            if(y+ship.length-1 >= this.size) alert('Enter ship within the board');
            for(let i=y;i<y+ship.length;i++){
                this.board[x][i].filledShip = ship;
            }
            this.totalShips++;
        }else{
            return;
        }
    }
    receiveAttack(cord){
        const x = cord.x;
        const y = cord.y;
        const arr = JSON.stringify([x,y]);
        if(this.missedAttack.has(arr)) {
            return;
        };
        if(this.board[x][y].filledShip !== null && this.board[x][y].hasHit === true){
            return;
        }
        if(this.board[x][y].filledShip !== null && this.board[x][y].hasHit === false){
            this.board[x][y].filledShip.hit();
            this.board[x][y].hasHit = true;
            if(this.board[x][y].filledShip.sunk === true){
                this.totalShips--;
            }
        }else if(this.board[x][y].filledShip === null){
            this.board[x][y].hasHit = true;
            this.missedAttack.add(arr);
        }
        if(this.totalShips === 0){
            console.log('all ships sunk');
        }
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.playingBoard = new Gameboard(10);
    }
}

export {Ship,Gameboard,Player};