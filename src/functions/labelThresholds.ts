export function labelThresholds(upperDomain, datumX, data){
    // return flag used to place labels at the ends of
    
    if (upperDomain >= 20.0){
        if (datumX == 19.5){
            return true;
        }
        return false;
    } else if (upperDomain == 17.05 || upperDomain == 18.05){
        if (datumX == upperDomain-0.4667){
            return true;
        }
        return false;
    } else if(upperDomain <=19.5 && upperDomain >= 1){
        if (datumX > upperDomain-0.1){
            return true;
        } 
        return false;
    } else {
        if (datumX >= upperDomain-0.1){
            return true;
        } else {
            return false;
        }
    }
}