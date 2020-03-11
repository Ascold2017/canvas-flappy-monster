/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/flappyMonster.ts":
/*!******************************!*\
  !*** ./src/flappyMonster.ts ***!
  \******************************/
/*! exports provided: FlappyMonster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlappyMonster\", function() { return FlappyMonster; });\n/* harmony import */ var _gameBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBackground */ \"./src/gameBackground.ts\");\n/* harmony import */ var _gameScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameScore */ \"./src/gameScore.ts\");\n/* harmony import */ var _wallFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallFactory */ \"./src/wallFactory.ts\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monster */ \"./src/monster.ts\");\n\r\n\r\n\r\n\r\nvar INITIAL = 1;\r\nvar GAME_PLAYING = 2;\r\nvar GAME_OVER = 3;\r\nvar KEY_CODE = {\r\n    R: 82\r\n};\r\nclass FlappyMonster {\r\n    constructor(canvas) {\r\n        //Global Attributes\r\n        this.canvas = canvas;\r\n        this.context = this.canvas.getContext('2d');\r\n        // Game State\r\n        this.currentState = INITIAL;\r\n        // Game Speed\r\n        this.velocity = 5;\r\n        // Bind Events\r\n        this.bindEvents();\r\n        // Create Game Objects\r\n        this.createObjects();\r\n    }\r\n    createObjects() {\r\n        // Background\r\n        this.background1 = new _gameBackground__WEBPACK_IMPORTED_MODULE_0__[\"GameBackground\"]('images/back.png', this.canvas);\r\n        this.background2 = new _gameBackground__WEBPACK_IMPORTED_MODULE_0__[\"GameBackground\"]('images/back.png', this.canvas);\r\n        this.background2.x = this.canvas.width;\r\n        // Score\r\n        this.gameScore = new _gameScore__WEBPACK_IMPORTED_MODULE_1__[\"GameScore\"](this.canvas);\r\n        this.gameScore.x = this.canvas.width - 150;\r\n        this.gameScore.y = 80;\r\n        // Wall Factory\r\n        this.wallFactory = new _wallFactory__WEBPACK_IMPORTED_MODULE_2__[\"WallFactory\"](this.canvas);\r\n        // Monster\r\n        this.monster = new _monster__WEBPACK_IMPORTED_MODULE_3__[\"Monster\"]('images/monster.png', this.canvas);\r\n    }\r\n    bindEvents() {\r\n        // Mouse Listener\r\n        this.canvas.addEventListener('click', (event) => {\r\n            switch (this.currentState) {\r\n                case INITIAL:\r\n                    this.currentState = GAME_PLAYING;\r\n                    this.wallFactory.generateWalls();\r\n                    break;\r\n                case GAME_PLAYING:\r\n                    this.monster.vy = -1 * this.velocity;\r\n                    break;\r\n            }\r\n        });\r\n        // Key Listener\r\n        window.addEventListener('keydown', (event) => {\r\n            switch (this.currentState) {\r\n                case GAME_OVER:\r\n                    if (event.keyCode === KEY_CODE.R) {\r\n                        this.reset();\r\n                        this.currentState = GAME_PLAYING;\r\n                    }\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n    reset() {\r\n        // Reset States\r\n        this.gameScore.start = +new Date();\r\n        this.gameScore.score = 0;\r\n        this.wallFactory.walls = [];\r\n        this.monster.x = 115;\r\n        this.monster.y = 115;\r\n    }\r\n    start() {\r\n        // Start Game\r\n        window.requestAnimationFrame(() => this.runGameLoop());\r\n    }\r\n    runGameLoop() {\r\n        // Game State\r\n        switch (this.currentState) {\r\n            case INITIAL:\r\n                // DRAW INITIAL SCREEN\r\n                this.drawInitialScreen();\r\n                break;\r\n            case GAME_PLAYING:\r\n                // DRAW GAME PLAYING SCREEN\r\n                this.drawGamePlayingScreen();\r\n                break;\r\n            case GAME_OVER:\r\n                // DRAW GAME OVER SCREEN\r\n                this.drawGameOverScreen();\r\n                break;\r\n        }\r\n        window.requestAnimationFrame(() => this.runGameLoop());\r\n    }\r\n    drawInitialScreen() {\r\n        // Background\r\n        this.context.fillStyle = 'black';\r\n        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n        // Text\r\n        this.context.fillStyle = 'white';\r\n        this.context.font = '36px Arial';\r\n        this.context.fillText('Click to Start!', this.canvas.width / 2 - 100, this.canvas.height / 2);\r\n    }\r\n    drawGamePlayingScreen() {\r\n        // Clear Canvas\r\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        // Draw Background\r\n        this.animateBackground();\r\n        // Draw Score\r\n        this.gameScore.draw();\r\n        // Draw Walls\r\n        this.drawWalls();\r\n        // Draw Monster\r\n        this.monster.draw();\r\n        // Collision Check\r\n        this.checkCollisions();\r\n    }\r\n    checkCollisions() {\r\n        var walls = this.wallFactory.walls;\r\n        for (var i = 0; i < walls.length; i++) {\r\n            if (this.isCollided(walls[i])) {\r\n                this.currentState = GAME_OVER;\r\n            }\r\n        }\r\n    }\r\n    isCollided(wall) {\r\n        var isCollided = true;\r\n        // Monster Coordinates\r\n        var monsterTop = this.monster.y;\r\n        var monsterBottom = this.monster.y + this.monster.h;\r\n        var monsterRight = this.monster.x + this.monster.w;\r\n        var monsterLeft = this.monster.x;\r\n        // Wall Coordinates\r\n        var wallTop = wall.y + wall.h + wall.gap; // top of lower wall\r\n        var wallBottom = wall.y + wall.h; // bottom of upper wall\r\n        var wallRight = wall.x + wall.w;\r\n        var wallLeft = wall.x;\r\n        if ((monsterBottom < wallTop && monsterTop > wallBottom)\r\n            || (monsterLeft > wallRight)\r\n            || (monsterRight < wallLeft)) {\r\n            isCollided = false;\r\n        }\r\n        return isCollided;\r\n    }\r\n    drawWalls() {\r\n        // Draw Walls\r\n        var walls = this.wallFactory.walls;\r\n        for (var i = 0; i < walls.length; i++) {\r\n            walls[i].draw();\r\n            walls[i].x = walls[i].x - this.velocity;\r\n        }\r\n        this.removeExtraWalls();\r\n    }\r\n    removeExtraWalls() {\r\n        // Draw Walls\r\n        var walls = this.wallFactory.walls;\r\n        for (var i = 0; i < walls.length; i++) {\r\n            if (walls[i].x + walls[i].w < 0) {\r\n                // remove\r\n                walls.shift();\r\n            }\r\n        }\r\n    }\r\n    animateBackground() {\r\n        // Background 1\r\n        this.background1.draw();\r\n        if (Math.abs(this.background1.x) > this.canvas.width) {\r\n            this.background1.x = this.canvas.width - this.velocity;\r\n        }\r\n        this.background1.x = this.background1.x - this.velocity;\r\n        // Background 2\r\n        this.background2.draw();\r\n        if (Math.abs(this.background2.x) > this.canvas.width) {\r\n            this.background2.x = this.canvas.width - this.velocity;\r\n        }\r\n        this.background2.x = this.background2.x - this.velocity;\r\n    }\r\n    drawGameOverScreen() {\r\n        // Background\r\n        this.context.fillStyle = 'black';\r\n        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n        // Text\r\n        this.context.fillStyle = 'white';\r\n        this.context.font = '54px Arial';\r\n        this.context.fillText('Your Score : ' + this.gameScore.score, this.canvas.width / 2 - 180, this.canvas.height / 2 - 100);\r\n        this.context.font = '36px Arial';\r\n        this.context.fillText('Game Over :(', this.canvas.width / 2 - 100, this.canvas.height / 2);\r\n        this.context.font = '24px Arial';\r\n        this.context.fillText('Press R to Restart!', this.canvas.width / 2 - 100, this.canvas.height / 2 + 50);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/flappyMonster.ts?");

/***/ }),

/***/ "./src/gameBackground.ts":
/*!*******************************!*\
  !*** ./src/gameBackground.ts ***!
  \*******************************/
/*! exports provided: GameBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameBackground\", function() { return GameBackground; });\nclass GameBackground {\r\n    constructor(src, canvas) {\r\n        this.src = src;\r\n        this.canvas = canvas;\r\n        this.context = this.canvas.getContext('2d');\r\n        // Specifications\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.w = this.canvas.width;\r\n        this.h = this.canvas.height;\r\n        this.src = src;\r\n        this.img = null;\r\n        // Create Background Image\r\n        this.create();\r\n    }\r\n    create() {\r\n        // Create Image\r\n        this.img = new Image();\r\n        this.img.src = this.src;\r\n    }\r\n    draw() {\r\n        // Draw\r\n        if (this.img != null) {\r\n            this.context.drawImage(this.img, this.x, this.y, this.w, this.h);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/gameBackground.ts?");

/***/ }),

/***/ "./src/gameScore.ts":
/*!**************************!*\
  !*** ./src/gameScore.ts ***!
  \**************************/
/*! exports provided: GameScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameScore\", function() { return GameScore; });\nclass GameScore {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n        // Global Attributes\r\n        this.context = this.canvas.getContext('2d');\r\n        // Specifications\r\n        this.start = +new Date();\r\n        this.score = 0;\r\n        this.x = 0;\r\n        this.y = 0;\r\n    }\r\n    draw() {\r\n        // Draw\r\n        var draw = +new Date();\r\n        this.score = +((draw - this.start) / 1000).toFixed(1);\r\n        this.context.font = '45px Verdana';\r\n        this.context.fillText(this.score.toString(), this.x, this.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/gameScore.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _flappyMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flappyMonster */ \"./src/flappyMonster.ts\");\n\r\nwindow.onload = function () {\r\n    // Canvas Definition\r\n    var canvas = document.getElementById('flappy-monster-game');\r\n    // Game Object\r\n    var flappyMonster = new _flappyMonster__WEBPACK_IMPORTED_MODULE_0__[\"FlappyMonster\"](canvas);\r\n    flappyMonster.start();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/monster.ts":
/*!************************!*\
  !*** ./src/monster.ts ***!
  \************************/
/*! exports provided: Monster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Monster\", function() { return Monster; });\nclass Monster {\r\n    constructor(src, canvas) {\r\n        this.frame = 0;\r\n        // Global Attributes\r\n        this.canvas = canvas;\r\n        this.context = this.canvas.getContext('2d');\r\n        // Specifications\r\n        this.x = 115;\r\n        this.y = 115;\r\n        this.w = 115;\r\n        this.h = 115;\r\n        this.vy = 0;\r\n        this.g = 0.20;\r\n        this.src = src;\r\n        this.img = null;\r\n        this.frame = 0;\r\n        // Create Monster Tile Image\r\n        this.create();\r\n    }\r\n    create() {\r\n        // Create Image\r\n        this.img = new Image();\r\n        this.img.src = this.src;\r\n    }\r\n    draw() {\r\n        // Draw\r\n        if (this.img != null) {\r\n            this.vy = this.vy + this.g;\r\n            this.y = this.y + this.vy;\r\n            if (this.y + this.h > this.canvas.height) {\r\n                this.y = this.canvas.height - this.h;\r\n                this.vy = 0;\r\n            }\r\n            else if (this.y < 0) {\r\n                this.y = 0;\r\n                this.vy = 0;\r\n            }\r\n            this.context.drawImage(this.img, this.frame * 115, 0, 115, 100, this.x, this.y, this.w, this.h);\r\n            this.frame++;\r\n            this.frame %= 4;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/monster.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: requestAnimationFrame, getRandomInt, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestAnimationFrame\", function() { return requestAnimationFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomColor\", function() { return getRandomColor; });\n/**\r\n *\r\n *\r\n * Global Functions\r\n *\r\n *\r\n */\r\n// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/\r\nconst requestAnimationFrame = (function () {\r\n    return window.requestAnimationFrame ||\r\n        window.webkitRequestAnimationFrame ||\r\n        function (callback) {\r\n            window.setTimeout(callback, 1000 / 60);\r\n        };\r\n})();\r\n//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\r\nconst getRandomInt = function (min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive\r\n};\r\nconst getRandomColor = function () {\r\n    var red = getRandomInt(0, 257);\r\n    var green = getRandomInt(0, 257);\r\n    var blue = getRandomInt(0, 257);\r\n    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';\r\n};\r\n\n\n//# sourceURL=webpack:///./src/util.ts?");

/***/ }),

/***/ "./src/wall.ts":
/*!*********************!*\
  !*** ./src/wall.ts ***!
  \*********************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wall\", function() { return Wall; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\r\nclass Wall {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n        this.context = this.canvas.getContext('2d');\r\n        // Specifications\r\n        this.x = canvas.width;\r\n        this.y = 0;\r\n        this.w = 100;\r\n        this.h = 0;\r\n        this.gap = 0;\r\n        this.color = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"getRandomColor\"])();\r\n    }\r\n    draw() {\r\n        // Wall Color\r\n        this.context.fillStyle = this.color;\r\n        // Draw Upper Part\r\n        this.context.fillRect(this.x, this.y, this.w, this.h);\r\n        // Draw Lower Part\r\n        this.context.fillRect(this.x, this.h + this.gap, this.w, this.canvas.height);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/wall.ts?");

/***/ }),

/***/ "./src/wallFactory.ts":
/*!****************************!*\
  !*** ./src/wallFactory.ts ***!
  \****************************/
/*! exports provided: WallFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WallFactory\", function() { return WallFactory; });\n/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall */ \"./src/wall.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\r\n\r\nclass WallFactory {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n        // Specifications\r\n        this.gap = 200;\r\n        this.maxGap = 300;\r\n        this.freq = 1500;\r\n        this.walls = [];\r\n    }\r\n    generateWalls() {\r\n        // Generate\r\n        setInterval(() => {\r\n            var gap = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getRandomInt\"])(this.gap, this.maxGap);\r\n            var height = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getRandomInt\"])(0, this.maxGap);\r\n            var wall = new _wall__WEBPACK_IMPORTED_MODULE_0__[\"Wall\"](this.canvas);\r\n            wall.gap = gap;\r\n            wall.h = height;\r\n            this.walls.push(wall);\r\n        }, this.freq);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/wallFactory.ts?");

/***/ })

/******/ });