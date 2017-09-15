function Sort(arr) {
    this._arr = arr;
}

Sort.prototype.insertionSort = function () {
    if (Array.isArray(this._arr)) {
        let input = this._arr;
        input.forEach(function (element, index) {
            let hole = index;
            while (hole > 0 && input[hole - 1] > element) {
                input[hole] = input[hole - 1];
                hole = hole - 1;
            }
            input[hole] = element;
        });

        return input;
    } else {
        return `Invalid input format.`;
    }

}

Sort.prototype.spiralTravesal = function (arr, row, col) {
    let T = 0, R = col - 1, L = 0, B = row - 1, dir = 0;
    let resultArr = [];
    while (T < row && R < col) {
        if (dir === 0) {
            for (let i = L; i <= R; i++) {
                resultArr.push(arr[T][i]);
            }
            T++;
            dir = 1;
        } else if (dir === 1) {
            for (let i = T; i <= B; i++) {
                resultArr.push(arr[i][R]);
            }
            R--;
            dir = 2;
        } else if (dir === 2) {
            for (let i = R; i >= L; i--) {
                resultArr.push(arr[B][i]);
            }
            B--;
            dir = 3;
        } else if (dir === 3) {
            for (let i = B; i >= T; i--) {
                resultArr.push(arr[i][L]);
            }
            L++;
            dir = 0;
        }
    }
    console.log(resultArr);
}

Sort.prototype.reverse = function (arr) {
    let reverseArr = [];
    reverseArr.concat(arr);
    let lastIndex = arr.length - 1;
    let index = 0;
    while (index <= lastIndex / 2 && index !== lastIndex - index) {
        let temp = reverseArr[index];
        reverseArr[index] = reverseArr[lastIndex - index];
        reverseArr[lastIndex - index] = temp;
        index++;
    }
    return reverseArr;
}
