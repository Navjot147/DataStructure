function rightAngleTriangleStars(rows) {
    for (let i = 0; i < rows; i++) {
        let str = '';
        for (let j = 0; j < i + 1; j++) {
            str += '*'
        }
        console.log(str);
    }
};

function leftAngleTriangleStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }
        for (let k = rows - i; k < rows; k++) {
            str += '*';
        }
        console.log(str);
    }
}

function equilateralTriangleStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }
        for (let k = rows - i; k < rows; k++) {
            str += '*';
        }
        for (let l = 0; l < i - 1; l++) {
            str += '*';
        }
        console.log(str);
    }
}

function topRightAngleTriangleStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= i - 1; j++) {
            str += ' ';
        }
        for (let k = i; k <= rows; k++) {
            str += '*';
        }
        console.log(str);
    }
}

function topLeftAngleTriangleStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 0; j <= rows - i; j++) {
            str += '*';
        }
        console.log(str);
    }
}

rightAngleTriangleStars(5);
leftAngleTriangleStars(5);
equilateralTriangleStars(5);
topRightAngleTriangleStars(5);
topLeftAngleTriangleStars(5);