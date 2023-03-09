function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if (n < 1 || n > 1000000) throw RangeError('n should be between 1 and 1,000,000')

  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};