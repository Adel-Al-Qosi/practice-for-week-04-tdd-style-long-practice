// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3        
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths() {
        let arrayOfSides = [this.side1, this.side2, this.side3]

        return arrayOfSides.reduce((boolean, side, i, array) => {
            let sumOfOtherSides = array.slice(0, i)
            .concat(array.slice(i + 1, array.length))
            .reduce((sumOfSides, otherSide) => sumOfSides += otherSide, 0)
            
            return side > sumOfOtherSides ? false: boolean
        }, true)
    }

    validate() {
        this.isValid = this.hasValidSideLengths()
    }

    static getValidTriangles(...triangles) {
        return triangles.filter(triangle => triangle.hasValidSideLengths())
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
        this.isValidTriangle = super.hasValidSideLengths()
    }

    isScalene() {
        let arrayOfSides = [this.side1, this.side2, this.side3]

        if (this.isValidTriangle) {
            if ([...new Set(arrayOfSides)].length === 3) {
                return true
            }
        }

        return false
    }

    validate() {
        this.isValidScalene = this.isScalene()
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
        this.isValidTriangle = super.hasValidSideLengths()
    }

    isIsosceles() {
        let arrayOfSides = [this.side1, this.side2, this.side3]

        if (this.isValidTriangle) {
            if ([... new Set(arrayOfSides)].length < 3) {
                return true
            }
        }
        
        return false
    }

    validate() {
        this.isValidIsosceles = this.isIsosceles()
    }
}

module.exports = {
    Triangle,
    Scalene,
    Isosceles
}