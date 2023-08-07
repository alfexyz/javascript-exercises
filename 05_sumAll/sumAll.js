const sumAll = function(start, stop) {
    let sum = 0;
    if(start > stop){
        let a = stop;
        stop = start;
        start = a;
    }
    if(typeof(start) === 'number' && typeof(stop) ==='number' && start >= 0 && stop >= 0){
        for(let i = start; i <= stop; i ++){
            sum += i;
        }
        return sum;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
