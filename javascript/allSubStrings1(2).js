var allSubstrings1 = function(s){
var result = "";
for (var i=0; i<s.length; i++)
	for(var k = i+1; k <= s.length; k++)
		result += s.substring(i,k) + ", ";
	return result;
}
