
exports.min = function min (array) {
    let result = 0;

    if (array && array.length > 0) {
        result = array.reduce((acc, cur) => cur < acc ? cur : acc, Infinity);
    }

    return result;
}

exports.max = function max (array) {
    let result = 0;

    if (array && array.length > 0) {
        result = array.reduce((acc, cur) => cur > acc ? cur : acc, -Infinity);
    }

    return result;
}

exports.avg = function avg (array) {
    let result = 0;

    if (array && array.length > 0) {
        result = array.reduce((acc, cur) => acc + cur, 0) / array.length;
    }

    return result;
}
