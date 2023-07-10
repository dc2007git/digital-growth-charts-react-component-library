export function angleForCentile(lowerVal, upperVal): number {
    // returns angle for label
    // accepts the last data point and the data array
    let angle = 0
    
    // const index = data.indexOf(datum)
    // const penultimateDatum = data[index-6]
    
    const gradient = (upperVal.y-lowerVal.y)/(upperVal.x - lowerVal.x);
    angle = Math.atan(gradient)
    
    return -angle*10;
}