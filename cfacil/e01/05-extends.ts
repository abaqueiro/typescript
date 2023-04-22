
type Person = {
	fullname: string
	lucky_number: number
}

// an interface can extend a type
// a type can not extend another type
interface Employee extends Person {
	charge: string
}



const newEmployee: Employee = {
	charge: 'Caballero Andante'
	, fullname: 'Don Quijote'
	, lucky_number: 25
}

// Union of types
type User = {
	id: number
}

type Admin = User & { token: string }
const myAdmin: Admin = {
	id: 1
	, token: 'oficialmatute'
}

type FullAdmin = Employee & Admin
const fullAdmin: FullAdmin = {
	id: -1
	, fullname: 'Don Gato'
	, lucky_number: 11
	, charge: 'Lider de la pandilla'
	, token: 'cucaramacaratiterefue'
}

// tips:
// types have a little more specificity when assign values, example allow only certain values
type foo = null | true | false | 0 | 1 | 'no' | 'yes'

// interfaces automix a la CSS
// also named composition
interface Developer {
	name: string
	stack: string[]
}
interface Developer {
	phone: string
}
// will require properties from both declarations
const aDev: Developer = {
	name: 'SuperProgramayin'
	, stack: ['MachineCode','Asm','C']
	, phone: '1223457890'
}

// it is recomended user interfaces over types

