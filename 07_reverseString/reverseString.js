
const reverseString = (string) => {


    let reversed = ``;

    for (const letters of string){
        reversed = letters + reversed;
    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
