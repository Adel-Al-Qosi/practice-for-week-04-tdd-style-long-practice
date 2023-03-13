// Your code here
const { expect } = require("chai");
const { Triangle, Scalene, Isosceles } = require("../problems/triangle");

describe("Triangle class", () => {
  let triangle;
  let invalidTriangle;

  beforeEach(() => {
    triangle = new Triangle(2, 3, 4);
    invalidTriangle = new Triangle(10, 14, 50);
  });

  afterEach(() => {
    triangle = null;
    invalidTriangle = null;
  });

  describe("constructor function", () => {
    it("the constructor instances should have side1, side2, and side3 properties", () => {
      expect(triangle.side1).to.exist;
      expect(triangle.side2).to.exist;
      expect(triangle.side3).to.exist;
      expect(triangle.side1).to.equal(2);
      expect(triangle.side2).to.equal(3);
      expect(triangle.side3).to.equal(4);
    });
  });

  describe("getPerimeter method", () => {
    it("should return the perimeter, by summing the three sides", () => {
      expect(triangle.getPerimeter()).to.equal(9);
    });
  });

  describe("hasValidSideLengths method", () => {
    it("should return true if the tringle is a valid one, and false if it is not", () => {
      expect(triangle.hasValidSideLengths()).to.be.true;
      expect(invalidTriangle.hasValidSideLengths()).to.be.false;
    });
  });

  describe("validate method", () => {
    it("should adds an isValid property, and set it to true if the triangle is a valid one and false if it is not", () => {
      triangle.validate();
      invalidTriangle.validate();

      expect(triangle.isValid).to.exist;
      expect(triangle.isValid).to.be.true;
      expect(invalidTriangle.isValid).to.exist;
      expect(invalidTriangle.isValid).to.be.false;
    });
  });

  describe("getValidTriangles static method", () => {
    it("takes in a number of Triangle istances and returns all instances that are valid", () => {
      expect(Triangle.getValidTriangles(triangle, invalidTriangle)).to.eql([
        triangle
      ]);
    });
  });
});

describe("Scalene class", () => {
  let scalene;
  let invalidScalene;

  beforeEach(() => {
    scalene = new Scalene(5, 7, 10);
    invalidScalene = new Scalene(5, 5, 5);
  });

  afterEach(() => {
    scalene = null;
    invalidScalene = null;
  });

  describe('constructor function', () => {
    it("should inherit the three sides from Triangle, as well as isValidTriangle property", () => {
      expect(scalene.side1).to.exist;
      expect(scalene.side2).to.exist;
      expect(scalene.side3).to.exist;
      expect(scalene.isValidTriangle).to.be.true;
      expect(scalene instanceof Triangle).to.be.true
    });
  })

  describe("isScalene method", () => {
    it("should return true if the instance is a valid scalene, and false if it's not", () => {
      expect(scalene.isScalene()).to.be.true;
      expect(invalidScalene.isScalene()).to.be.false;
    });
  });

  describe("validate method", () => {
    it("should add an isValidScalene property to the scalene triangle instance with a value of true if it's a valid scalene, and false other wise", () => {
      scalene.validate();
      invalidScalene.validate()
      expect(scalene.isValidScalene).to.be.true;
      expect(invalidScalene.isValidScalene).to.be.false;
    });

    it("should override the validate inherited method", () => {
      invalidScalene.validate();
      expect(invalidScalene.isValidScalene).to.be.false;
    });
  });
});

describe("Isosceles class", () => {
  let isosceles;
  let invalidIsosceles;

  beforeEach(() => {
    isosceles = new Isosceles(10, 10, 15);
    invalidIsosceles = new Isosceles(10, 15, 20);
  });

  afterEach(() => {
    isosceles = null;
    invalidIsosceles = null;
  });

  describe("constructor function", () => {
    it("should inherits the three sides, as well as isValidTriangle property", () => {
      expect(isosceles.side1).to.exist;
      expect(isosceles.side2).to.exist;
      expect(isosceles.side3).to.exist;
      expect(isosceles.isValidTriangle).to.be.true;
    });
  });

  describe("isIsosceles method", () => {
    it("should return true if the instance is a valid isosceles, and false if it's not", () => {
      expect(isosceles.isIsosceles()).to.be.true;
      expect(invalidIsosceles.isIsosceles()).to.be.false;
    });
  });

  describe("validate method", () => {
    it("should add an isValidIsosceles property and give is a value of true if it is a valid isosceles and false if it is not", () => {
      isosceles.validate();
      expect(isosceles.isValidIsosceles).to.be.true;
    });

    it("should override the inherited validate method", () => {
      invalidIsosceles.validate();
      expect(invalidIsosceles.isValidIsosceles).to.be.false;
    });
  });
});
