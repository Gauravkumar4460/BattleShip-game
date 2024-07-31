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

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    var timesHit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var sunk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.timesHit = timesHit;\n    this.sunk = sunk;\n  }\n  return _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.timesHit++;\n      if (this.timesHit === this.length) {\n        this.sunk = true;\n      }\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      if (this.timesHit >= this.length) {\n        return true;\n      }\n      return false;\n    }\n  }]);\n}();\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(size) {\n    _classCallCheck(this, Gameboard);\n    this.size = size;\n    this.board = this.createBoard(size);\n    this.missedAttack = new Set();\n    this.totalShips = 0;\n  }\n  return _createClass(Gameboard, [{\n    key: \"createBoard\",\n    value: function createBoard() {\n      var _this = this;\n      return Array.from({\n        length: this.size\n      }, function () {\n        return Array.from({\n          length: _this.size\n        }, function () {\n          return {\n            filledShip: null,\n            hasHit: false\n          };\n        });\n      });\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(ship, cord, align) {\n      var x = cord.x;\n      var y = cord.y;\n      if (x >= this.size || y >= this.size || x < 0 || y < 0) {\n        return;\n      }\n      if (align === 'horizontal') {\n        if (x + ship.length - 1 >= this.size) alert('Enter ship within the board');\n        for (var i = x; i < x + ship.length; i++) {\n          this.board[i][y].filledShip = ship;\n        }\n        this.totalShips++;\n      } else if (align === 'vertical') {\n        if (y + ship.length - 1 >= this.size) alert('Enter ship within the board');\n        for (var _i = y; _i < y + ship.length; _i++) {\n          this.board[x][_i].filledShip = ship;\n        }\n        this.totalShips++;\n      } else {\n        return;\n      }\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(cord) {\n      var x = cord.x;\n      var y = cord.y;\n      var arr = JSON.stringify([x, y]);\n      if (this.missedAttack.has(arr)) {\n        return;\n      }\n      ;\n      if (this.board[x][y].filledShip !== null && this.board[x][y].hasHit === true) {\n        return;\n      }\n      if (this.board[x][y].filledShip !== null && this.board[x][y].hasHit === false) {\n        this.board[x][y].filledShip.hit();\n        this.board[x][y].hasHit = true;\n        if (this.board[x][y].filledShip.sunk === true) {\n          this.totalShips--;\n        }\n      } else if (this.board[x][y].filledShip === null) {\n        this.board[x][y].hasHit = true;\n        this.missedAttack.add(arr);\n      }\n      if (this.totalShips === 0) {\n        console.log('all ships sunk');\n      }\n    }\n  }]);\n}();\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n  this.name = name;\n  this.playingBoard = new Gameboard(10);\n});\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ship.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;