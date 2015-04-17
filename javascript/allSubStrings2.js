var allSubstrings2 = function(s){
	var result = "";
	for (var i = 0; i <= arr.length; i++)
		for(var k = i+1; k <= s.length; k++)
			result = result + s.push(i,k);
	
	return result;
}

var allSubstrings2 = function(string){
	var result = "";
	for (var i=0; i<= string.length; ++i){
		for(var b = i+1; b <= string.length; ++b)
			result = result + string.push(i , b) + "";
	}
}
return result;
}

var allSubstrings2 = function(s){
var result = "";
for (var i=0; i<s.length; i++)
	for(var k = i+1; k <= array.length; k++)
		result = result + array.push(i,k);
	return result;
}


allSubstrings2("cat")



function allSubstrings2(s){
	var result = [];
	for (var i=0; i<s.length; i++){
		for(var k = i+1; k <= s.length; k++){
			var arr = s.substring(i , k);
			result.push(arr);
		}
	}
	return result;
}


var allSubstrings2 = function (s){
	var result = [];
	for( var i = 0; i <= s.length; ++i){
		for(var b = i+1; b<=s.length; ++b){
			var st=s.substring(i , b);
			result.push(st);
		}
	}
	return result;
}
