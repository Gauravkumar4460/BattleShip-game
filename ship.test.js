import { Ship,Gameboard,Player } from './src/ship.js';
test('hit function is okay!!', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.timesHit).toBe(1);
});
test('isSunk function is okay!!',() => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
test('placeShip function is okay!!',() => {
    const ship = new Ship(3);
    const gameboard = new Gameboard(10);
    const cord = {
        x:2,
        y:2
    };
    gameboard.placeShip(ship,cord,'horizontal');
    expect(gameboard.board[cord.x][cord.y].filledShip).toBe(ship);
});
test('receiveAttack function is okay!!',() => {
    const ship = new Ship(4);
    const gameboard = new Gameboard(10);
    const cord = {
        x:1,
        y:1
    };
    gameboard.placeShip(ship,cord,'horizontal');
    gameboard.receiveAttack(cord);
    expect(gameboard.board[cord.x][cord.y].filledShip).toBe(ship);
    expect(gameboard.board[cord.x][cord.y].hasHit).toBe(true);
    gameboard.receiveAttack({x:2,y:1});
    expect(gameboard.board[cord.x+1][cord.y].hasHit).toBe(true);

    gameboard.receiveAttack({x:3,y:1});
    expect(gameboard.board[cord.x+2][cord.y].hasHit).toBe(true);
    expect(gameboard.totalShips).toBe(1);
    gameboard.receiveAttack({x:4,y:1});
    expect(gameboard.board[cord.x+3][cord.y].hasHit).toBe(true);
    expect(gameboard.totalShips).toBe(0);
    expect(gameboard.missedAttack.has('[4,1]')).toBe(false);
    gameboard.receiveAttack({x:5,y:1});
    expect(gameboard.missedAttack.has('[5,1]')).toBe(true);
});

