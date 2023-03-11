module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== "string")
    throw new TypeError("this input is not a string. please enter a string");

  if (string.length === 1) return string;

  const lastCharecter = string[string.length - 1];
  const restOfString = string.slice(0, string.length - 1);

  return lastCharecter + reverseString(restOfString);
};
