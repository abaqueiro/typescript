
// you can create a new data type (data structure like)
type Persona = {
	nombre: string
	apaterno: string
	amaterno: string
	comentarios?: string //optional
}

// a constant can not be redefined, and should be initialized on the same expression
const unaPersona: Persona = {
	nombre: 'Alfonso'
	, apaterno: 'Baqueiro'
	, amaterno: 'Bernal'
}

console.log( typeof unaPersona )
console.log( JSON.stringify(unaPersona) )


// declare several valid types for a ServiceResponse
type ServiceResponse = string | null | number | undefined

// declare several valid values for user types
type UserType = 'admin' | 'normal' | 'superuser'

type User = {
	persona: Persona
	type: UserType
}

let someUser: User = {
	persona: {
		nombre: 'Liam'
		, apaterno: 'Baqueiro'
		, amaterno: 'Flores'
	}
	, type: 'superuser'
}
console.log( JSON.stringify( someUser ) )

