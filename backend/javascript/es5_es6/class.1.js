// CLASS ------------------------------------------------------------
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	get color() {
		return this._color;
	}

	set color(c) {
		this._color = c;
	}

	get dimension() {
		return `${this.width} x ${this.height}`;
	}

	static area(c) {
		return c.width * c.height;
	}
}

console.log('class ---------------------------');
const r = new Rectangle(20, 10);
console.log(r.height);
console.log(r.width);

r.color = "red";
console.log(r.color);
console.log(r.dimension);
console.log(Rectangle.area(r));

// EXTENDS ------------------------------------------------------------
class Square extends Rectangle {
	constructor(width) {
		super(width, width);
	}
}

console.log('extends ---------------------------');
const s = new Square(10);
console.log(s.dimension);
console.log(Square.area(s));
