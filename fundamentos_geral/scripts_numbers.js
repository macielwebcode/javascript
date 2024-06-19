let num1 = 10;
let num2 = 2.5;
let num3 = 34.54534;

console.log(num1.toString() + num2);
num1 = num1.toString();
console.log(num1.toString(2));
 //arredondando 
 console.log(num1.toFixed(2));

 console.log(Number.isInteger(num1));

 let temp = num1 * '5';
 console.log(Number.isNaN(temp));


num5 = 0.8;
num6 = 0.2;

num5 += num6;
num5 += num6;
num5 += num6;

num5 = parseFloat(num5.toFixed(2));

console.log(num5);

console.log(Numebr.isInteger(num5));
