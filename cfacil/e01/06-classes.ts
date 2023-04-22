class Animal {
	name: 'animal'
	private secreto = 10
	protected identity = 'lll'

	constructor(){
		this.sayHi()
	}

	sayHi() {
		console.log('Grrr', this.secreto )
	}
}

console.log('Creating an Animal ...')
const myAnimal: Animal = new Animal()




class Dog extends Animal {
	raza: "chihuahua"

	constructor(){
		super() // call the parent class constructor
		this.identity = 'perrito' // you can access parent class protected members
		this.ladra()
	}

	ladra(){
		console.log('guff guff')
	}
}

console.log('Creating a Dog ...')
const myDog: Dog = new Dog()

