import {colorPicker, widthPicker, divisionPicker} from "./settings";
import {circleSymmetry} from './symmetry';
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
        this.context.lineWidth = widthPicker();
        this.context.strokeStyle = colorPicker();
        this.context.lineCap = "round";
        this.context.moveTo(this.startX - this.width / 2 , this.startY - this.height / 2);  
        this.context.lineTo(this.endX - this.width / 2, this.endY - this.height / 2);
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

    handleMove(e){
        if(this.draw){
            this.getCoordinates(e);
            circleSymmetry(divisionPicker(), true, this.context, this.startDraw, this.width, this.height);
        }
    }

    handleDown(e){
        this.getCoordinates(e);
        this.draw = true;
    }

    handleClear(){
        this.context.clearRect(0,0,this.width, this.height)
    }
}

export default Canvas;