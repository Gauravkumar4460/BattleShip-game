/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nfunction controlGame() {\n  var player1Name = 'Your';\n  var player2Name = 'Computer';\n  var player1 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Player(player1Name);\n  var player2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Player(player2Name);\n  var player1Board = document.getElementById('player1Board');\n  var player2Board = document.getElementById('player2Board');\n  var currentPlayer = player1;\n  var _makeComputerMove = function makeComputerMove(attacker, defender) {\n    if (defender.playingBoard.totalShips === 0) return;\n    var row = Math.floor(Math.random() * (10 - 0)) + 0;\n    var col = Math.floor(Math.random() * (10 - 0)) + 0;\n    var computerTargetBoard = defender.playingBoard.board;\n    while (computerTargetBoard[row][col].hasHit === true) {\n      row = Math.floor(Math.random() * (10 - 0)) + 0;\n      col = Math.floor(Math.random() * (10 - 0)) + 0;\n    }\n    if (computerTargetBoard[row][col].filledShip === null) {\n      var cell = document.querySelector(\".cell[data-x=\\\"\".concat(row, \"\\\"][data-y=\\\"\").concat(col, \"\\\"]\"));\n      handleClick(attacker, defender, row, col, cell);\n    } else {\n      var _cell = document.querySelector(\".cell[data-x=\\\"\".concat(row, \"\\\"][data-y=\\\"\").concat(col, \"\\\"]\"));\n      handleClick(attacker, defender, row, col, _cell);\n      row = Math.floor(Math.random() * (10 - 0)) + 0;\n      col = Math.floor(Math.random() * (10 - 0)) + 0;\n      while (computerTargetBoard[row][col].hasHit === false && computerTargetBoard[row][col].filledShip !== null) {\n        var _cell2 = document.querySelector(\".cell[data-x=\\\"\".concat(row, \"\\\"][data-y=\\\"\").concat(col, \"\\\"]\"));\n        handleClick(attacker, defender, row, col, _cell2);\n        row = Math.floor(Math.random() * (10 - 0)) + 0;\n        col = Math.floor(Math.random() * (10 - 0)) + 0;\n      }\n      if (computerTargetBoard[row][col].filledShip !== null) {\n        _makeComputerMove(attacker, defender);\n      } else if (computerTargetBoard[row][col].hasHit === false) {\n        var _cell3 = document.querySelector(\".cell[data-x=\\\"\".concat(row, \"\\\"][data-y=\\\"\").concat(col, \"\\\"]\"));\n        handleClick(attacker, defender, row, col, _cell3);\n      } else {\n        _makeComputerMove(attacker, defender);\n      }\n    }\n  };\n  var updateBoardState = function updateBoardState(player1Board, player2Board) {\n    var player1Cells = player1Board.querySelectorAll('.cell');\n    var player2Cells = player2Board.querySelectorAll('.cell2');\n    player1Cells.forEach(function (cell) {\n      cell.classList.toggle('inactive', currentPlayer === player1);\n    });\n    player2Cells.forEach(function (cell2) {\n      cell2.classList.toggle('inactive', currentPlayer === player2);\n    });\n  };\n  var handleClick = function handleClick(attacker, defender, row, col, cell) {\n    if (defender.playingBoard.board[row][col].hasHit === true) {\n      alert('This cell already clicked!!, Try another');\n      return;\n    }\n    defender.playingBoard.receiveAttack({\n      x: row,\n      y: col\n    });\n    if (defender.playingBoard.board[row][col].filledShip === null) {\n      cell.classList.add('target-miss');\n      currentPlayer = currentPlayer === player1 ? player2 : player1;\n      setTimeout(function () {\n        updateBoardState(player1Board, player2Board);\n      }, 200);\n    } else if (defender.playingBoard.board[row][col].filledShip !== null) {\n      cell.classList.add('target-hit');\n    }\n    if (defender.playingBoard.totalShips === 0) {\n      setTimeout(function () {\n        alert(\" Congratulations!! \".concat(currentPlayer.name, \", You won the game.\"));\n      }, 100);\n      var _player1Board = player1.playingBoard.board;\n      var _player2Board = player2.playingBoard.board;\n      var player1Cells = document.querySelectorAll('.cell');\n      var player2Cells = document.querySelectorAll('.cell2');\n      player1Cells.forEach(function (cell) {\n        cell.classList.add('inactive');\n      });\n      player2Cells.forEach(function (cell2) {\n        cell2.classList.add('inactive');\n      });\n      var _play = document.getElementById('play-button');\n      _play.classList.add('inactive');\n      return;\n    }\n  };\n  var renderBoards = function renderBoards(player1, player2) {\n    var player1Array = player1.playingBoard.board;\n    var player2Array = player2.playingBoard.board;\n    var player1Board = document.getElementById('player1Board');\n    var player2Board = document.getElementById('player2Board');\n    player1Board.innerHTML = '';\n    player2Board.innerHTML = '';\n    var rows = player1Array.length;\n    var cols = player1Array[0].length;\n    player1Board.style.gridTemplateRows = \"repeat(\".concat(rows, \",40px)\");\n    player1Board.style.gridTemplateColumns = \"repeat(\".concat(cols, \",40px)\");\n    player2Board.style.gridTemplateRows = \"repeat(\".concat(rows, \",40px)\");\n    player2Board.style.gridTemplateColumns = \"repeat(\".concat(cols, \",40px)\");\n    var _loop = function _loop(row) {\n      var _loop2 = function _loop2(col) {\n        var cell = document.createElement('div');\n        cell.dataset.x = \"\".concat(row);\n        cell.dataset.y = \"\".concat(col);\n        cell.classList.add('cell');\n        player1Board.appendChild(cell);\n        var cell2 = document.createElement('div');\n        cell2.dataset.x = \"\".concat(row);\n        cell2.dataset.y = \"\".concat(col);\n        cell2.classList.add('cell2');\n        cell2.addEventListener('click', function () {\n          handleClick(player1, player2, row, col, cell2);\n          if (currentPlayer !== player1) setTimeout(function () {\n            _makeComputerMove(player2, player1);\n          }, 600);\n        });\n        player2Board.appendChild(cell2);\n      };\n      for (var col = 0; col < cols; col++) {\n        _loop2(col);\n      }\n    };\n    for (var row = 0; row < rows; row++) {\n      _loop(row);\n    }\n    var player1Cells = document.querySelectorAll('.cell');\n    var player2Cells = document.querySelectorAll('.cell2');\n    player2Cells.forEach(function (cell2) {\n      cell2.classList.add('inactive');\n    });\n    var player1Space = document.getElementById('player1-space');\n    var player2Space = document.getElementById('player2-space');\n    var nameOfPlayer1 = document.createElement('h3');\n    nameOfPlayer1.textContent = \"\".concat(player1Name, \" Base\");\n    var nameOfPlayer2 = document.createElement('h3');\n    nameOfPlayer2.textContent = \"\".concat(player2Name, \"'s Base\");\n    player1Space.appendChild(nameOfPlayer1);\n    player2Space.appendChild(nameOfPlayer2);\n    var swapCellProperties = function swapCellProperties(firstCell, secondCell) {\n      var tempClassList = Array.from(firstCell.classList);\n      firstCell.className = secondCell.className;\n      secondCell.className = tempClassList.join(' ');\n      var tempData = _objectSpread({}, firstCell.dataset);\n      firstCell.dataset.x = secondCell.dataset.x;\n      firstCell.dataset.y = secondCell.dataset.y;\n      secondCell.dataset.x = tempData.x;\n      secondCell.dataset.y = tempData.y;\n    };\n    var firstCell = null,\n      secondCell = null;\n    var handleDoubleClick = function handleDoubleClick(event) {\n      var cell = event.target;\n      if (firstCell === null) {\n        firstCell = cell;\n        return;\n      } else secondCell = cell;\n      console.log(\"Selected cell at: \".concat(cell.dataset.x, \",\").concat(cell.dataset.y));\n      swapCellProperties(firstCell, secondCell);\n      firstCell = null;\n      secondCell = null;\n    };\n    player1Board.querySelectorAll('.cell').forEach(function (cell) {\n      cell.addEventListener(\"click\", handleDoubleClick);\n    });\n  };\n  var highlightBorder = function highlightBorder(player1) {\n    var player1Board = player1.playingBoard.board;\n    var player1Cells = document.querySelectorAll('.cell');\n    player1Cells.forEach(function (cell) {\n      var x = parseInt(cell.dataset.x, 10);\n      var y = parseInt(cell.dataset.y, 10);\n      if (player1Board[x][y].filledShip !== null) {\n        cell.classList.add('highlightBorder');\n      }\n    });\n  };\n  var highlightBorder2 = function highlightBorder2(player2) {\n    var player2Board = player2.playingBoard.board;\n    var player2Cells = document.querySelectorAll('.cell2');\n    player2Cells.forEach(function (cell) {\n      var x = parseInt(cell.dataset.x, 10);\n      var y = parseInt(cell.dataset.y, 10);\n      if (player2Board[x][y].filledShip !== null) {\n        cell.classList.add('highlightBorder');\n      }\n    });\n  };\n  var unhighlightCells = function unhighlightCells() {\n    var player1Cells = player1Board.querySelectorAll('.cell');\n    var player2Cells = player2Board.querySelectorAll('.cell2');\n    player1Cells.forEach(function (cell) {\n      cell.classList.remove('highlightBorder');\n    });\n    player2Cells.forEach(function (cell) {\n      cell.classList.remove('highlightBorder');\n    });\n  };\n  renderBoards(player1, player2);\n  var play = document.getElementById('play-button');\n  var handleClickEvent = function handleClickEvent() {\n    updateBoardState(player1Board, player2Board);\n    unhighlightCells();\n  };\n  play.addEventListener('click', function () {\n    return handleClickEvent();\n  });\n  var ship1 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\n  var ship2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\n  var ship5 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\n  player1.playingBoard.placeShip(ship1, {\n    x: 1,\n    y: 1\n  }, 'horizontal');\n  player1.playingBoard.placeShip(ship2, {\n    x: 5,\n    y: 5\n  }, 'horizontal');\n  player1.playingBoard.placeShip(ship5, {\n    x: 0,\n    y: 8\n  }, 'vertical');\n  var ship3 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\n  var ship4 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\n  var ship6 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\n  player2.playingBoard.placeShip(ship3, {\n    x: 2,\n    y: 2\n  }, 'horizontal');\n  player2.playingBoard.placeShip(ship4, {\n    x: 3,\n    y: 7\n  }, 'horizontal');\n  player2.playingBoard.placeShip(ship6, {\n    x: 8,\n    y: 8\n  }, 'vertical');\n  highlightBorder(player1);\n}\ncontrolGame();\n\n//# sourceURL=webpack://battleship/./src/gameController.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    var timesHit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var sunk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.timesHit = timesHit;\n    this.sunk = sunk;\n  }\n  return _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.timesHit++;\n      if (this.timesHit === this.length) {\n        this.sunk = true;\n      }\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      if (this.timesHit >= this.length) {\n        return true;\n      }\n      return false;\n    }\n  }]);\n}();\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(size) {\n    _classCallCheck(this, Gameboard);\n    this.size = size;\n    this.board = this.createBoard(size);\n    this.missedAttack = new Set();\n    this.totalShips = 0;\n  }\n  return _createClass(Gameboard, [{\n    key: \"createBoard\",\n    value: function createBoard() {\n      var _this = this;\n      return Array.from({\n        length: this.size\n      }, function () {\n        return Array.from({\n          length: _this.size\n        }, function () {\n          return {\n            filledShip: null,\n            hasHit: false\n          };\n        });\n      });\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(ship, cord, align) {\n      var x = cord.x;\n      var y = cord.y;\n      if (x >= this.size || y >= this.size || x < 0 || y < 0) {\n        return;\n      }\n      if (align === 'horizontal') {\n        if (x + ship.length - 1 >= this.size) alert('Enter ship within the board');\n        for (var i = x; i < x + ship.length; i++) {\n          this.board[i][y].filledShip = ship;\n        }\n        this.totalShips++;\n      } else if (align === 'vertical') {\n        if (y + ship.length - 1 >= this.size) alert('Enter ship within the board');\n        for (var _i = y; _i < y + ship.length; _i++) {\n          this.board[x][_i].filledShip = ship;\n        }\n        this.totalShips++;\n      } else {\n        return;\n      }\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(cord) {\n      var x = cord.x;\n      var y = cord.y;\n      var arr = JSON.stringify([x, y]);\n      if (this.missedAttack.has(arr)) {\n        return;\n      }\n      ;\n      if (this.board[x][y].filledShip !== null && this.board[x][y].hasHit === true) {\n        return;\n      }\n      if (this.board[x][y].filledShip !== null && this.board[x][y].hasHit === false) {\n        this.board[x][y].filledShip.hit();\n        this.board[x][y].hasHit = true;\n        if (this.board[x][y].filledShip.sunk === true) {\n          this.totalShips--;\n        }\n      } else if (this.board[x][y].filledShip === null) {\n        this.board[x][y].hasHit = true;\n        this.missedAttack.add(arr);\n      }\n      if (this.totalShips === 0) {\n        console.log('all ships sunk');\n      }\n    }\n  }]);\n}();\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n  this.name = name;\n  this.playingBoard = new Gameboard(10);\n});\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameController.js");
/******/ 	
/******/ })()
;