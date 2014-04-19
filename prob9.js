/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/
var squares = [];
for(var i=0;i<=1000;i++){
    if(Math.sqrt(i) == parseInt(Math.sqrt(i))){
	squares.push(i);
    }
}
var now = Date.now();
var count = 0;
function findProductOfTriplet(){
    for(var i=0;i<=1000;i++){
	for(var x=1;x<=1000;x++){
	    for(var y=1;y<=1000;y++){
		count++;
		if(Math.pow(x,2)+Math.pow(y,2) == Math.pow(i,2)){
		    if(x+y+i == 1000){
			console.log((Date.now() - now)/1000+' seconds');
			console.log(count+ ' tries');
			console.log([x,y,i]);
			return 'Product '+x*y*i;
		    }
		}
	    }
	}
    }
}
console.log(findProductOfTriplet());
