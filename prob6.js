/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumOfSquares(max){
    var i;
    var sum = 0;
    for(i=0;i<=max;i++)
	sum += Math.pow(i,2);
    return sum;
}

function squareOfSum(max){
    var i, square=0;
    for(i=0;i<=max;i++)
	square+=i;
    return Math.pow(square,2);
}

function difference(max){
    return squareOfSum(max) - sumOfSquares(max);
}

console.log(difference(100));
