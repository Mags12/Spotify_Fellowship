function changePossibilities(t, amt) {
  var result = [];
  
  for (var i = 1; i <= t; i++) {
      result[i] = 0;
  }
  result[0] = 1;
      
  amt.forEach(function(num){
      for (var e = num; e <= t; e++) {
          var remainder = e - num;
          result[e] += result[remainder];
      }
    amt.push(result);
  });

  return result[t];
} 