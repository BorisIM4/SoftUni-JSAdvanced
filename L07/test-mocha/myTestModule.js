function sum(a, b) {
    return a + b + 5;
}

function product(a, b) {
    return a * b;
}

const data = [1, 2, 3];

function printArr(){
    console.log(data);
}

module.export = {
    sum,
    product,
    data,
    printArr
};