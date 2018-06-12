
function decodeString(a){
	var regex = /(\d+)\[([a-z]*)\]/i;
	var newString = a.replace(regex, function(match, num, substr){
    return(substr.repeat(num))
  });
	var checkString = regex.test(newString);
	if(checkString){
		return decodeString(newString);
	};
	return newString;
}