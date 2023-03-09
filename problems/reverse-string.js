module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') throw new TypeError('this input is not a string. please inter a string')

  if (string.length === 1) return string

  let restOfString = string.slice(0, string.length - 1) 
  let lastCharecter = string[string.length - 1]

  return lastCharecter + reverseString(restOfString)
};