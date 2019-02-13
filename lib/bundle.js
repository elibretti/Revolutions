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
/* harmony import */ var _symmetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symmetry */ "./lib/symmetry.js");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polygon */ "./lib/polygon.js");



class Canvas {
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.clear = document.getElementById("clear");
        this.polygonModeButton = document.getElementById("polygon-mode")
        this.mirrorModeButton = document.getElementById("mirror");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        [this.startX, this.startY] = [0, 0]; //initializing coordinates
        [this.endX, this.endY] = [0, 0];
        this.draw = false;
        this.polygonMode = false;
        this.mirrorMode = false;
        this.clear.onclick = this.handleClear.bind(this);
        this.polygonModeButton.onclick = this.handlePolygonMode.bind(this);
        this.mirrorModeButton.onclick = this.handleMirrorMode.bind(this);
        this.canvas.onpointermove = this.handleMove.bind(this);  //handles pointer clicking and dragging
        this.canvas.onpointerdown = this.handleDown.bind(this);
        this.canvas.onpointerup = this.endDraw.bind(this);      // stops drawing when no click/drag
        this.canvas.onpointerout = this.endDraw.bind(this);
        this.startDraw = this.startDraw.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.drawCoordinates = this.drawCoordinates.bind(this);
        }

    startDraw(startX = this.startX, startY = this.startY, endX= this.endX, endY = this.endY){
        this.context.beginPath();
        this.context.lineWidth = Object(_settings__WEBPACK_IMPORTED_MODULE_0__["widthPicker"])();
        this.context.strokeStyle = Object(_settings__WEBPACK_IMPORTED_MODULE_0__["colorPicker"])();
        this.context.lineCap = "round";
        this.context.moveTo(startX - this.width / 2 , startY - this.height / 2);  
        this.context.lineTo(endX - this.width / 2, endY - this.height / 2);
        this.context.stroke();
        this.context.restore();
    }

    endDraw(){
        this.draw = false;
    }

    getCoordinates(e){
        [this.startX, this.startY] = [this.endX , this.endY];
        this.endX = e.clientX - this.canvas.offsetLeft;
        this.endY = e.clientY - this.canvas.offsetTop;
    }
    drawCoordinates(x,y){
        this.context.beginPath();
        this.context.arc(x, y, Object(_settings__WEBPACK_IMPORTED_MODULE_0__["widthPicker"])()/2, 0, Math.PI*2, true)
        this.context.fillStyle = Object(_settings__WEBPACK_IMPORTED_MODULE_0__["colorPicker"])();
        this.context.fill();
        this.context.restore();
    }


    handleMove(e){
        if(this.draw){
            this.getCoordinates(e);
            if(!this.polygonMode){
                Object(_symmetry__WEBPACK_IMPORTED_MODULE_1__["circleSymmetry"])(Object(_settings__WEBPACK_IMPORTED_MODULE_0__["divisionPicker"])(), this.mirrorMode, this.context, this.startDraw, this.width, this.height)
            }else{
                [this.prev_dist, this.prev_theta] =Object(_polygon__WEBPACK_IMPORTED_MODULE_2__["polySymm"])( Object(_settings__WEBPACK_IMPORTED_MODULE_0__["divisionPicker"])(), this.context, this.width, this.height,this.endX, this.endY, this.prev_dist, this.prev_theta, this.startDraw);
            }
            

        }
    }

    handleDown(e){
        this.getCoordinates(e);
        if(!this.polygonMode){
            Object(_symmetry__WEBPACK_IMPORTED_MODULE_1__["circlePointSymmetry"])(Object(_settings__WEBPACK_IMPORTED_MODULE_0__["divisionPicker"])(), this.mirrorMode, this.context, this.drawCoordinates, this.width, this.height, this.endX, this.endY)
        }else{
            Object(_polygon__WEBPACK_IMPORTED_MODULE_2__["polyPoint"])( Object(_settings__WEBPACK_IMPORTED_MODULE_0__["divisionPicker"])(), this.context, this.width, this.height, this.endX, this.endY, this.drawCoordinates);
        }
        this.draw = true;
    }

    handleClear(){
        this.context.clearRect(0,0,this.width, this.height)
    }

    handlePolygonMode(){
        this.polygonMode = !this.polygonMode;
    }
    handleMirrorMode(){
        this.mirrorMode = !this.mirrorMode;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./lib/polygon.js":
/*!************************!*\
  !*** ./lib/polygon.js ***!
  \************************/
/*! exports provided: polyPoint, polySymm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyPoint", function() { return polyPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polySymm", function() { return polySymm; });


const polyPoint = ( sections = 2, ctx, w, h, x2, y2, drawpt) => {
    x2= x2 -w/2;
    y2 = y2 - h/2;
    let dist = Math.sqrt((x2 * x2) + (y2 * y2));
    let theta1 = (Math.atan2(y2, x2) + Math.PI * 2) % (Math.PI * 2);
    let theta2 =(Math.atan2(y2, x2) + Math.PI) % (Math.PI);
    dist = dist*Math.cos((theta2+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
    
    for(let i = 0; i < 4 * sections; i++){
        let new_theta = theta1 + i * (Math.PI *2 / (4 * sections) );
        let dist2 =dist*Math.cos((theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((new_theta+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
        let xpt = dist2 * Math.cos(new_theta);
        let ypt = dist2 * Math.sin(new_theta);
        ctx.save()
        drawpt(xpt + w/2 , ypt+ h/2 )
    }
}

const polySymm = ( sections, ctx, w, h, x2, y2, prev_dist, prev_theta, drawline,) => {
    x2= x2 -w/2;
    y2 = y2 - h/2;  
    let dist = Math.sqrt((x2 * x2) + (y2 * y2));
    let theta1 = (Math.atan2(y2, x2) + Math.PI * 2) % (Math.PI * 2);
    let theta2 =(Math.atan2(y2, x2) + Math.PI) % (Math.PI);
    dist = dist*Math.cos((theta2+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
    if(!prev_dist){
        prev_dist = dist;
        prev_theta = theta1;
    }
    for(let i = 0; i < 4 * sections; i++){
        let new_theta = theta1 + i * (Math.PI *2 / (4 * sections));
        let dist2 =dist*Math.cos((theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((new_theta+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
        let dist3 = prev_dist*Math.cos((prev_theta+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((new_theta + prev_theta - theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
        let xpt_1 = dist2*Math.cos(new_theta);
        let ypt_1 = dist2*Math.sin(new_theta);
        let xpt_2 = dist3*Math.cos(new_theta + prev_theta - theta1);
        let ypt_2 = dist3*Math.sin(new_theta + prev_theta - theta1);
      drawline(xpt_1 + w , ypt_1 + h, xpt_2 + w, ypt_2 + h);
    }
    prev_theta = theta1;
    prev_dist = dist;
    return [prev_dist, prev_theta]

}

/***/ }),

/***/ "./lib/settings.js":
/*!*************************!*\
  !*** ./lib/settings.js ***!
  \*************************/
/*! exports provided: colorPicker, widthPicker, divisionPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPicker", function() { return colorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widthPicker", function() { return widthPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divisionPicker", function() { return divisionPicker; });

const colorPicker = () => {
        const picker = document.getElementById("color");
        return picker.value;
    }

const widthPicker = () => {
        const picker = document.getElementById("pen-width");
        return picker.value;
    }

const divisionPicker = () => {
    const picker = document.getElementById("divisions");
    return picker.value;
}


/***/ }),

/***/ "./lib/symmetry.js":
/*!*************************!*\
  !*** ./lib/symmetry.js ***!
  \*************************/
/*! exports provided: circleSymmetry, circlePointSymmetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleSymmetry", function() { return circleSymmetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circlePointSymmetry", function() { return circlePointSymmetry; });
const circleSymmetry = (sections = 2, mirror, context, startDraw, width, height) => {
    const arc = (360 / sections) * ( Math.PI / 180);
    let i;
    for( i = 0; i < sections; i++){
        context.save();
        context.translate(width/2, height/2);
        context.rotate(arc * i);
        startDraw();
    }
    if(mirror){
        let i;
        for( i = 0; i < sections; i++){
            context.save();
            context.translate(width/2, height/2);
            context.rotate(arc * i);
            context.scale(-1,1);
            startDraw();
        }
    }

}

const circlePointSymmetry = (sections = 2, mirror, context, startDraw, width, height, x, y) => {
    const arc = (360 / sections) * ( Math.PI / 180);
    const c_x = width /2;
    const c_y = height / 2;
    for(let i = 0; i < sections; i++){
        context.save();
        let x_rot = Math.cos(arc*i)*(x - c_x) - Math.sin(arc*i)*(y - c_y) +c_x;
        let y_rot = Math.sin(arc*i)*(x - c_x) + Math.cos(arc*i)*(y - c_y) +c_y;
        startDraw(x_rot, y_rot);
    }
    if(mirror){
        let i;
        for( i = 0; i < sections; i++){
            context.save();
            context.translate(width/2, height/2);
            context.rotate(arc * i);
            context.scale(-1,1);
            startDraw();
        }
    }
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map