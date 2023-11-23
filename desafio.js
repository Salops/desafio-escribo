function manipulateNumber(value) {
  let sum = 0;
  for (let i = 0; i < value; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
    if (i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

module.exports = { manipulateNumber };
