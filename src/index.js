
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix.length == 0) {
        let empty_arr = [];
        return empty_arr;
    }
    else {
        const mat = matrix.map((item, index) => index % 2 == 0 ? item : item.reverse());
        return mat.reduce(function (a, b) {
            return a.concat(b);
        });
    }
}

