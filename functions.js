//Part 2A

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
	return true;
}
else{
	return false;
}
}

//Part 2B

//first part is 2A being used in allArmstrongs function

function isArmstrong(n){
	"use strict";
	var sum = 0;
n = String(n);
for(var i=0; i < n.length; ++i){
	sum = sum + Math.pow(Number(n[i]), n.length);
}
if (n == sum) {
	return true;
}
else{
	return false;
}
}

var  allArmstrongs = function(){
	"use strict";
	var result = "";
	for(var i=1; i < 10000; ++i){
		if(isArmstrong(i))
			result = result + i + " ";
	}
	return result;
}

//Part 2C
var allSubstrings1 = function(s){
	var result = "";
	for (var i=0; i<s.length; i++)
		for(var k = i+1; k <= s.length; k++)
			result += s.substring(i,k) + ", ";
		return result;
	}

//part 2D
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

//Part 2E
function maxWord(s) {
	var longest = 0;
	var result = '';
	var word = s.split(" ");
	for (var i = 0; i < word.length; i++) {
		if (longest < word[i].length) {
			longest = word[i].length;
			result = word[i];
		}
	}
	return result;
}