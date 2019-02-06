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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/app.js":
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./lib/canvas.js");


document.addEventListener('DOMContentLoaded', () => {
    const canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__["default"]();
});

/***/ }),

/***/ "./lib/canvas.js":
/*!***********************!*\
  !*** ./lib/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./lib/settings.js");

class Canvas {
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.clear = document.getElementById("clear");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        [this.startX, this.startY] = [0, 0]; //initializing coordinates
        [this.endX, this.endY] = [0, 0]
        this.draw = false;
        this.clear.onclick = this.handleClear.bind(this)
        this.canvas.onpointermove = this.handleMove.bind(this);  //handles pointer clicking and dragging
        this.canvas.onpointerdown = this.handleDown.bind(this);
        this.canvas.onpointerup = this.endDraw.bind(this);      // stops drawing when no click/drag
        this.canvas.onpointerout = this.endDraw.bind(this);
        this.startDraw = this.startDraw.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        }

    startDraw(){
        this.context.beginPath();
        this.context.lineWidth = Object(_settings__WEBPACK_IMPORTED_MODULE_0__["widthPicker"])();
        this.context.strokeStyle = Object(_settings__WEBPACK_IMPORTED_MODULE_0__["colorPicker"])();
        this.context.lineCap = "round";
        this.context.moveTo(this.startX, this.startY);  
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
        this.context.closePath();
    }

    endDraw(){
        this.draw = false;
    }

    getCoordinates(e){
        [this.startX, this.startY] = [this.endX, this.endY];
        this.endX = e.clientX - this.canvas.offsetLeft;
        this.endY = e.clientY - this.canvas.offsetTop;
    }

    handleMove(e){
        if(this.draw){
            this.getCoordinates(e);
            this.startDraw();
        }
    }

    handleDown(e){
        this.getCoordinates(e);
        this.draw = true;
    }

    handleClear(){
        debugger
        this.context.clearRect(0,0,this.width, this.height)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./lib/settings.js":
/*!*************************!*\
  !*** ./lib/settings.js ***!
  \*************************/
/*! exports provided: colorPicker, widthPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPicker", function() { return colorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widthPicker", function() { return widthPicker; });

const colorPicker = () => {
        const picker = document.getElementById("color");
        return picker.value;
    }

const widthPicker = () => {
        const picker = document.getElementById("pen-width");
        return picker.value;
    }

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map