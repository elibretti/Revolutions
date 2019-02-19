import {colorPicker, widthPicker, divisionPicker} from "./settings";
import {circleSymmetry, circlePointSymmetry, polygonPointSymmetry } from './symmetry';
import {polyPoint, polySymm} from './polygon';
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
        this.context.lineWidth = widthPicker();
        this.context.strokeStyle = colorPicker();
        this.context.lineCap = "round";
        this.context.moveTo(startX - this.width / 2 , startY - this.height / 2);  
        this.context.lineTo(endX - this.width / 2, endY - this.height / 2);
        this.context.stroke();
        this.context.restore();
    }

    endDraw(){
        this.draw = false;
        this.prev_dist = null;
        this.prev_theta = null;
    }

    getCoordinates(e){
        [this.startX, this.startY] = [this.endX , this.endY];
        this.endX = e.clientX - this.canvas.offsetLeft;
        this.endY = e.clientY - this.canvas.offsetTop;
    }
    drawCoordinates(x,y){
        this.context.beginPath();
        this.context.arc(x, y, widthPicker()/2, 0, Math.PI*2, true)
        this.context.fillStyle = colorPicker();
        this.context.fill();
        this.context.restore();
    }


    handleMove(e){
        if(this.draw){
            this.getCoordinates(e);
            if(!this.polygonMode){
                circleSymmetry(divisionPicker(), this.mirrorMode, this.context, this.startDraw, this.width, this.height)
            }else{
                [this.prev_dist, this.prev_theta] =polySymm( divisionPicker(), this.context, this.width, this.height,this.endX, this.endY, this.prev_dist, this.prev_theta, this.startDraw);
            }
            

        }
    }

    handleDown(e){
        this.getCoordinates(e);
        if(!this.polygonMode){
            circlePointSymmetry(divisionPicker(), this.mirrorMode, this.context, this.drawCoordinates, this.width, this.height, this.endX, this.endY)
        }else{
            polyPoint( divisionPicker(), this.context, this.width, this.height, this.endX, this.endY, this.drawCoordinates);
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

export default Canvas;