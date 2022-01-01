function checkPalindrom(phrase) {
  let char = phrase.split(''),
  firstLetter = char.shift(),
  lastLetter = char.pop();
  if (firstLetter !== lastLetter ) {
    return false;
  }
  if (char.length < 2) {
    return true;
  }

  return checkPalindrom(char.join(''));
}

console.log(checkPalindrom('ana'))