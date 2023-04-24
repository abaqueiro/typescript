
// works like a contract of functionality
interface FigureInterface {
	side_length: number
	getNumberOfSides: () => number
	computePerimeter: () => number
	computeArea: () => number
}

class Figure implements FigureInterface {
	public side_length: number = NaN
	protected n_sides:number = NaN
	
	getNumberOfSides(){
		return this.n_sides
	}
	computePerimeter(){
		return this.n_sides * this.side_length
	}
	computeArea(){
		return NaN
	}
}

console.log( 'Creating a Figure ...' )
const fig = new Figure()
console.log( '  side length: ' + fig.side_length )
console.log( '  setting side length to 25 ...' )
fig.side_length = 25
console.log( '  side length: ' + fig.side_length )

class Triangle extends Figure {
	constructor(){
		super()
		this.n_sides = 3
		this.side_length = 1
	}

	computeArea(){
		return this.side_length / 2 * Math.sqrt(3)
	}
}

console.log( '' )
console.log( 'Creating a Triangle ...' )
const tri = new Triangle
tri.side_length = 3
console.log( '  side length: ' + tri.side_length )
console.log( '  getNumberOfSides: ' + tri.getNumberOfSides() )
console.log( '  computePerimeter: ' + tri.computePerimeter() )
console.log( '  computeArea: ' + tri.computeArea() )

