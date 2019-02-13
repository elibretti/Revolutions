export const circleSymmetry = (sections = 2, mirror, context, startDraw, width, height) => {
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

export const circlePointSymmetry = (sections = 2, mirror, context, startDraw, width, height, x, y) => {
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

