function balikString(kata){
  var output = ''
    for(var i=kata.length-1;i>=0;i--){
      output = output + kata [i];
    }
    return output
}
console.log(balikString('aquarius'));