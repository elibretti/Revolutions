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

// export const polygonSymmetry = ( context, startDraw, width, height, startX, startY) => {
//     const arc = (360 / 4) * ( Math.PI / 180);
    
//     let i;
//     let j = 0;
//     let x1 = Math.abs(startX - width/2)
//     while (x1 - j > 0){
//         for( i = 0; i < 4 ; i++){
//             context.save();
//             context.rotate(arc * i);
//             context.translate(width/2 + j, height/2);
//             startDraw();
//         }
//         j = j + 10;
//     }


// }