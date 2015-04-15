function isArmstrong(n){
	"use strict";
	var sum = 0;
//convert to string
n = String(n);
//traverse the array
for(var i=0; i < n.length; ++i){
	sum = sum + Math.pow(Number(n[i]), n.length);
	//console.log(sum);
	//console.log(n);
}

	if (n == sum) {
		return "True";

	}

	else{
			return "False";
	}
}



function isArmstrong(){
	"use strict";
	var result = "";
	var sum = 0;
//convert to string
//n = String(n);
//traverse the array
for(var i=0; i < 10000; ++i){
	//console.log(n);
}
if (isArmstrong(i)) {
			result = result + i + " ";
		}
	
return result;
}


