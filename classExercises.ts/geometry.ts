interface Shape {
    getArea(): number;
}

class Rectangle implements Shape{
    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    } 
    
    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle /*implements Shape*/{
    constructor (side: number){
        super(side, side)
    }

    override getArea(): number {
        return Math.pow(this.width, 2)
    }
}

const rectangle = new Rectangle(4,5)
const square = new Square(5)
console.log(rectangle.getArea())
console.log(square.getArea())