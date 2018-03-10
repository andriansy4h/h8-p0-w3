function palindrome(kata) {
  var baru = '';
  for(var i = kata.length-1; i >= 0; i--) {
    baru = baru + kata[i];
    if(baru === kata) {
      return true;
    }
  }
  return false;
}
console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));