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
    let i;
    for( i = 0; i < sections; i++){
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


export const polygonPointSymmetry = ( sections = 2, mirror, context, startDraw, width, height, x, y) => {
    const c_x = width /2;
    const c_y = height / 2;
    let k;
    if( Math.abs(c_x-x) > Math.abs(c_y - y)){
        k = Math.abs((c_x- x)) ;
        
    }else{
        k = Math.abs((c_y- y));
    }

    context.save();
    // startDraw(c_x + k , c_y + k);
    // startDraw(c_x + k, c_y - k);
    // startDraw(c_x - k , c_y - k);
    // startDraw(c_x - k , c_y + k);
    sections = 2;
    const diff = (k * 2 / sections);
    let i;
    // for(i=0; i < sections; i++){
    //     context.save();
    //     startDraw(c_x + k - (diff * i) , c_y + k);
    //     startDraw(c_x + k, c_y - k +  (diff * i));
    //     startDraw(c_x - k + (diff * i), c_y - k);
    //     startDraw(c_x - k , c_y + k  - (diff * i));
    // }

    let new_x=x;
    while(new_x <= c_x + k){
        startDraw(new_x, c_y + k);
        startDraw(new_x, c_y - k);
        new_x = new_x + diff;
    }
    new_x=x
    while(new_x >= c_x - k){
        startDraw(new_x, c_y + k);
        startDraw(new_x, c_y - k);
        new_x = new_x - diff;
    }
    let new_y=y; 
    while(new_y <= c_y + k){
        startDraw(c_x + k, new_y);
        startDraw(c_x - k, new_y);
        new_y = new_y + diff;
    }
    new_y=y
    while(new_y >= c_y - k){
        startDraw(c_x + k, new_y);
        startDraw(c_x - k, new_y);
        new_y = new_y - diff;
    }

}


// export const polygonPointSymmetry2 = ( sections = 2, mirror, context, startDraw, width, height, x, y) => {
//     const c_x = width /2;
//     const c_y = height / 2;
//     let k;
//     if( Math.abs(c_x-x) > Math.abs(c_y - y)){
//         k = Math.abs((c_x- x)) ;
        
//     }else{
//         k = Math.abs((c_y- y));
//     }

//     sections = 4;
//     const arc = (360 / sections) * ( Math.PI / 180);
//     let i;
//     for( i = 0; i < sections; i++){
//         context.save();
//         context.rotate(arc * i);
//         startDraw(c_x + k , c_y + k);
//         startDraw(c_x + k, c_y - k);
//         startDraw(c_x - k , c_y - k);
//         startDraw(c_x - k , c_y + k);
//     }
//     context.save();

// }