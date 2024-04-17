class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(2, 4);

const area = rectangle.getArea();
const perimeter = rectangle.getPerimeter();

console.log("area ", area);
console.log("perimeter ", perimeter);
