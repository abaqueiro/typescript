// you can define Interfaces
interface Person {
	name: string
	code: string | number
	charge: string
	description?: string  // ? makes description optional
	// also can have methods
	sayHello: () => string  // function returns a string
}

// throws error for lacking properties
/*
var personaA: Person  = {
	name: 'Poncho'
}
*/
var personaA: Person
personaA = {
	name: 'Poncho'
	, code: '03'
	, charge: 'Development Manager'
	, sayHello: () => 'Hellow'
}

var personaB: Person = {
	name: 'Gurrumina'
	, code: 25
	, charge: 'pajarita'
	, sayHello: () => {
		return 'Pi-pi-pi'
	}
}

console.log( JSON.stringify( personaA ) )
console.log( 'personaA.description.toUpperCase:' + personaA.description?.toUpperCase() )

