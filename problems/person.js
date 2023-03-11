class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this)
  }

  update(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) throw new TypeError('this input is not an object')

    for (let i in this) {
      if (obj[i] === undefined) throw new TypeError('this object is invalid')
      else this[i] = obj[i]
    }
  }

  tryUpdate(obj) {
    try {
      this.update(obj)
      return true
    } catch {
      return false
    }
  }

  static greetAll(arrayOfInstances) {
    return arrayOfInstances.map(instance => instance.sayHello())
  }
}

module.exports = Person;
