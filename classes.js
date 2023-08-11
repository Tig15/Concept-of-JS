class Rect {
  constructor(height, width) {
    (this.width = width), (this.height = height);
  }

  getArea() {
    return this.height * this.width;
  }
}

const firstData = new Rect(15, 18);
console.log(firstData);
console.log(firstData.getArea());
