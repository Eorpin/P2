function allSubStrings1(s){
//s = String(s); 
var result = "";
for (var i=0; i<s.length; i++){
	for(var k=1; k<(s.length+1); k++)
result= result + s.substr(i,k)+", ";
//console.log(result);
}
return result;
}

