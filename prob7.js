/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/


function isPrime(number){
    if(number%2==0)
	return false;
    var sqrt = Math.floor(Math.sqrt(number));
    for(var i=3;i<=sqrt;i+=2){
	if(number%i==0)
	    return false;
    }
    return true;
}

var primes = [2];
var num = 3;
while(primes.length <10001){
    if(isPrime(num)){
	primes.push(num);
    }
    num+=2;
}
console.log('10001th prime: ' + primes[primes.length-1]);   
