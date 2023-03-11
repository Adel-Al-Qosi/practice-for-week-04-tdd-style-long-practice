function myMap(inputArray, callback) {
  // Your code here
  let outputArray = []

  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i]
    let newElement = callback(element)

    outputArray.push(newElement)
  }

  return outputArray
}

module.exports = myMap;