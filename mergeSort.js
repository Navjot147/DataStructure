function MergeSort(arr) {
    this._arr = arr;
}

Sort.prototype.merge = function (leftSubarray, rightSubArrray, array) {

    const divideArray = (array) => {
        let i = 0;
        while (i < array.length) {
            if (array.length < 1) {
                return;
            }
            let indexHalf = parseInt(array.length / 2);
            indexHalf = array.length % 2 === 1 ? indexHalf : indexHalf - 1;
            let leftSubarray = array.slice(0, indexHalf);
            let rightSubArrray = array.slice(indexHalf);

            divideArray(leftSubarray);
            divideArray(rightSubArrray);
            this.merge(leftSubarray, rightSubArrray, array);
            i++;
        }
    }
    let i = 0;
    while(i < leftSubarray.length){
        
    }
}