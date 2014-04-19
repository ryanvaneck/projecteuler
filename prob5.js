/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function checker(maxDivisor){
    var i = maxDivisor*(maxDivisor-1);
    while(1){
	var divisor;
	for(divisor=maxDivisor-1;divisor>=3;divisor-=1){
	    if(i%divisor !=0)
		break;
	    if(divisor==3 && i!=0){
		return i;
	    }
	}
	i+=maxDivisor * (maxDivisor-1);
    }
    
}
console.log(checker(20));
