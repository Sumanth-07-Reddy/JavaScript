function isLeap(year) {
    
    var year = prompt("enter the year:")
    
    if (year % 4 === 0) {
        if ( year % 100 ===0) {
            if (year % 400 === 0 ) {

            }else {
                return "Not Leap year";
            }
        }else {
            return "leap year";
        }
    }else {
        return "Not Leap year";
    }
