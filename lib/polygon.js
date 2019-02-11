export const polyPoint = ( ctx, w, h, x2, y2, drawpt) => {
    x2= x2 -w/2;
    y2 = y2 - h/2;
    let dist = Math.sqrt((x2 * x2) + (y2 * y2));
    let theta1 = (Math.atan2(y2, x2) + Math.PI * 2) % (Math.PI * 2);
    let theta2 =(Math.atan2(y2, x2) + Math.PI) % (Math.PI);
    dist = dist*Math.cos((theta2+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
    
    for(let i = 0; i < 40; i++){
        let new_theta = theta1 + i * (Math.PI *2 /40 );
        let dist2 =dist*Math.cos((theta1+Math.PI/4)%(Math.PI/4*2)-Math.PI/4)/Math.cos((new_theta+Math.PI/4)%(Math.PI/4*2)-Math.PI/4);
        let xpt = dist2 * Math.cos(new_theta);
        let ypt = dist2 * Math.sin(new_theta);
        ctx.save()
        drawpt(xpt + w/2 , ypt+ h/2 )
    }
}