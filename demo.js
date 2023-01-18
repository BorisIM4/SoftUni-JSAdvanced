function sumTwoNumber(a, b){
    console.log(a + b);
}

sumTwoNumber(2, 4);

const sumFunction = sumTwoNumber;

console.log(sumFunction);

sumFunction(5, 10);

// ---------------------------------------------------------------

// function christmasAstraTree(number) {

//     for (let row = 0; row < number; row++) {
//         for (let colum = 0; colum < row; colum++) {
//             console.log(`*`);
            
//         }
//         // console.log(`---`);
//     }
// }

// christmasAstraTree(5);

// ---------------------------------------------------------------

// class Calculator{
//     constructor(n1, n2, operator){
//         this.number1 = n1;
//         this.number2 = n2;
//         this.operator = operator;
//     }

//     sumTwoNumber(){
//         return this.number1 + this.number2;
//     }

//     substractTwoNumber(){
//         return this.number1 - this.number2;
//     }

//     if (operator = `+`) {
//         sumTwoNumber();
//     } 
    
//     if (operator = `-`) {
//         substractTwoNumber();
//     }
// }

// const sum = new Calculator(25, 10, `+`);
// const subtract = new Calculator(25, 10, `-`);

// console.log(sum);
// console.log(subtract);
