const factorials = (int) => {
    let factorial = 1;
    for (let index = int; index > 0; index -= 1) factorial *= index;
    return factorial;
  };

  factorials(3)

  module.exports = factorials;