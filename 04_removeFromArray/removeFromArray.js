const removeFromArray = function() {
    const arg = [...arguments];
    let arr = arg[0];
    arg.shift();
    return arr.filter((x) =>{
        for(let i = 0; i < arg.length; i ++){
            if(x === arg[i]) return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
