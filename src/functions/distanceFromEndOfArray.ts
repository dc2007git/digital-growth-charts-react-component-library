export function distanceFromEndOfArray(domains) {
    /*
    Helper function to return index of element in centileData array to replace with label
    based on upper X domain of visible chart.
    This is used either to plot the centile label, or the angle of the centile label
    */
    let distanceFromEndOfArray = 2
    if (Math.trunc(domains.x[1]) > 4 && Math.trunc(domains.x[1])< 11 ){
        distanceFromEndOfArray = 4
    } else if(Math.trunc(domains.x[1]) >= 11){
        distanceFromEndOfArray = 7
    }
    return distanceFromEndOfArray;
}