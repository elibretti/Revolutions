

export const polyPoint = ( sections = 2, ctx, w, h, x2, y2, drawpt) => {
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

export const polySymm = ( sections, ctx, w, h, x2, y2, prev_dist, prev_theta, drawline,) => {
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
        ctx.save()
      drawline(xpt_1 + w , ypt_1 + h, xpt_2 + w, ypt_2 + h);
    }
    prev_theta = theta1;
    prev_dist = dist;
    return [prev_dist, prev_theta]

}