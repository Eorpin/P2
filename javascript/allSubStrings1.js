function allSubStrings1(s){
//s = String(s); 
var result = "";
var length = s.length;
var str='';
for (var i=0; i<length; i++){
	//console.log(result);
	for(var k=1; k<(length-i); k++)
		var sub = s.substring(i,(k+1))

//str += sub + ", "; 
console.log(result);
}
//return result;
}


str += sub + ", "; 
//console.log(result);
}
//return result;
}

allSubStrings1("cat");