const removeMiddle = (words) => {
    const middleIndex = Math.floor(words.length / 2);
    const output = [words[middleIndex]];
    words.splice(middleIndex, 1);
    return output;
  };
    console.log(removeMiddle('queen'));

  module.exports = removeMiddle;