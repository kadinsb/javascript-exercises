const sumAll = function(num1, num2) {


    let sum = 0;
    let firstNum = num1;
    let secondNum = num2;


if(Number.isInteger(firstNum) === false || Number.isInteger(secondNum) === false ){
    return `ERROR`;
}
if(firstNum < 0 || secondNum < 0){
    return `ERROR`;
}

    
    if ( firstNum === secondNum) {
        return sum = firstNum + secondNum;
    }
    else if ( firstNum < secondNum){
        while (firstNum <= secondNum){
            sum += firstNum;
            firstNum++;
        }
    }
    else if ( secondNum < firstNum){
        while (secondNum <= firstNum){
        sum += secondNum;
        secondNum++;
        }
    }
    

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
