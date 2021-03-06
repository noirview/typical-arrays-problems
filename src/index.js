
exports.min = function min(array) {
    if (arguments.length == 0) return 0;
    if (array == 0) return 0;

    let min = array[0];

    for (let num of array) {
        if (min > num) min = num;
    }

    return min;
}

exports.max = function max(array) {
    if (arguments.length == 0) return 0;
    if (array.length == 0) return 0;

    let max = array[0];

    for (let num of array) {
        if (max < num) max = num;
    }

    return max;
}

exports.avg = function avg(array) {
    if (arguments.length == 0) return 0;
    if (array.length == 0) return 0;
    
    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    return sum / array.length;
}
