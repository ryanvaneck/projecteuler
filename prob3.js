//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?


function isPrime(number){
    if(number%2==0)
	return false;
    var sqrt = Math.ceil(Math.sqrt(number));
    for(var i=3;i<sqrt;i+=2){
	if(number%i==0)
	    return false;
    }
    return true;
}

function primeFactors(number, last){
    if(isPrime(number))
	return number;
    if(arguments.length < 2)
	last = 2;
    if(number%last==0){
	return last.toString() +', '+ primeFactors(number/last,last);
    }
    else
	return primeFactors(number, last +1);
}

console.log(primeFactors(600851475143));
