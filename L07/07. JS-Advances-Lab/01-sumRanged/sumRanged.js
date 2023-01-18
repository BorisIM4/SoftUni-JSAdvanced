function sumRange(arr, start, end) {

    if(Array.isArray(arr) == false) {
        return NaN;
    }

    if(start < 0) {
        start = 0;
    }

    if(end > arr.length - 1) {
        end = arr.length - 1;
    }

    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += Number(arr[index]);
    }

    return sum;

}

console.log(`1 -> `, sumRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(`2 -> `, sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(`3 -> `, sumRange([10, 'twenty', 30, 40], 0, 2));
console.log(`4 -> `, sumRange([], 1, 2));
console.log(`5 -> `, sumRange('text', 0, 2));