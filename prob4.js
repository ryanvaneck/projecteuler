/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/


function isPal(number){
    if(typeof number == 'number')
	number = number.toString();
    var len = number.length
    if(len == 1 || len == 0)
	return true;
    else if(number[0] != number[len-1])
       return false;
    else
	return isPal(number.slice(1,len-1));
}
function largestPal(){
    for(var i=999;i>=900;i--){
	for(var j=999;j>=900;j--){
	    if(isPal(i*j)){
		return(i*j);
	    }
	}
    }
}

console.log(largestPal());
