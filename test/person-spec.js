// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const Person = require("../problems/person");

describe("Person class", function () {
  let person;
  let otherPerson;

  beforeEach(() => {
    person = new Person("Jhon", 24);
    otherPerson = new Person("Sam", 27);
  });
  afterEach(() => {
    person = null;
    otherPerson = null;
  });

  describe("constructor function", function () {
    it("the instances of the constructor should name and age properties", function () {
      expect(person.name).to.equal("Jhon");
      expect(person.age).to.equal(24);
    });
  });

  describe("sayHello method", function () {
    it("should return a string of greeting message", function () {
      expect(person.sayHello()).to.equal(
        "Hello, my name is Jhon and I am 24 years old"
      );
    });
  });

  describe("visit method", function () {
    it("should return a string stating that this Person instance has visited the passed-in Person instance", function () {
      expect(person.visit(otherPerson)).to.equal("Jhon visited Sam");
    });
  });

  describe("switchVisit method", function () {
    it("should invoke the visit method on its argument instance, passing in the current instance as an argument", function () {
      expect(person.switchVisit(otherPerson)).to.equal("Sam visited Jhon");
    });
  });

  describe("update method", function () {
    it("should throw a TypeError if the passed-in argument is not an object", function () {
      expect(() => person.update(5)).to.throw(TypeError);
      expect(() => person.update(['Hasan', 22])).to.throw(TypeError);
    });

    it("should update the instance if the passed-in argument is a valid object", function () {
      person.update({ name: "Hasan", age: 30 });
      expect(person.name).to.equal("Hasan");
      expect(person.age).to.eql(30);
    });

    it("should throw a TypeError with an appropriate message if the object does NOT have a name or an age property", function () {
      expect(() => person.update({})).to.throw(TypeError);
    });
  });

  describe("tryUpdate method", function () {
    it("should invoke the update method on the instance and return true when invoked successfully", function () {
      expect(person.tryUpdate({ name: "Hasan", age: 30 })).to.be.true;
    });

    it("should invoke the update method on the instance and return false when the invoke is not successful", function () {
      expect(person.tryUpdate({})).to.be.false;
    });
  });

  describe("greetAll static method", function () {
    it("should invoke the sayHello method on each instance within the passed-in array, and return a new array of all the strings returned", function () {
      expect(Person.greetAll([person, otherPerson])).to.eql([
        "Hello, my name is Jhon and I am 24 years old",
        "Hello, my name is Sam and I am 27 years old",
      ]);
    });
  });
});
