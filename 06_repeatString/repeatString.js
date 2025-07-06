const repeatString = function(message, repeat) {

    let text = ""

    if (repeat < 0){
        return `ERROR`;
    }

    for (let i = 0; i < repeat; i++){
        text += message;
    }

    return text;

};

// Do not edit below this line
module.exports = repeatString;
