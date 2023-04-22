// you know, you need a set of numerical constants with names
// for make code more readable
enum UserType {
	NORMAL			// = 0
	, PAYED			// = 1
	, ADMIN			// = 2
	, MEGA			// = 3
}

// let is the same as var
var myUser = {
	type: UserType.ADMIN
}

console.log( 'myUser.type:' + myUser.type )

// if we need to set the value
enum MsgType {
	DEBUG = 1
	, INFO = 2
	, WARNING = 4
	, ERROR = 8
}

// you can also use strings
enum Level {
	HIGH = 'high'
	, MEDIUM = 'medium'
	, LOW = 'low'
}

// you can define Interfaces
interface Person {
	name: string
	code: string
	charge: string
	description: string
}
var persona1: Person  = {
	name: 'Poncho'
}

