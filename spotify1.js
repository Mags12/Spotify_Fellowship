function sortByStrings(a, b) {
  
  var one = a.split("");
  var two = b.split("");

  var newString = [];

  for (var i=0; i < two.length; i++){
    for (var e=0; e < one.length; e++){
      if (two[i] == one[e]) newString.push(two[i])
    };
  };

  return(newString);
}

