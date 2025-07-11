const removeFromArray = function(arr, ...remove) {

    ///loops over the arguments we want to remove
    for (let num of remove){


       /// while there is still an element in arr === num, keep running
        while (arr.some(element => element === num)){
            ///find the index of the item we want to remove and store in index
            let index = arr.findIndex(element => element === num);
            ///use toSpliced to create a copy or arr removed by the element above
            ///then replace the original array with the new array
            arr = arr.toSpliced(index, 1);
        }

    };


    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;