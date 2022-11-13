class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    //call super class constructor and pass the shape parameter
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle("blue", 2, 3);
console.log("Area:" + rectangle.getArea());
console.log("Color:" + rectangle.getColor());
