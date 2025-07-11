const leapYears = function(year) {

    ///convert year to string and treat like an array
    const yearString = (year.toString());

    
    ///determine IF year is in the 100's
    if (yearString.length >= 3 && yearString.at(-1) === `0` && yearString.at(-2) === `0`){
       
        ///if year is divisible by 400 and returns int, return true
        if (year % 400 === 0){
            return true;
        }
        else {
            return false;
        }
    }
    ///check if year is divisible by 4 and returns an int
    if(year % 4 === 0){
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
