// ts allow type declaration
var age:number = 25
var age_str:string = "25"
var isSenior:boolean = true
var person:Object = {}

var fruitA:Array<string> = ['manzana','pera','platano']
var verduraA:string[] = ['lechuga','pepino','coliflor']

var something:any = true
something = 1
something = "hello"
something = {}
something = []

// no explica para que es, se concreta a decir que es más controlado que any
var desconocido:unknown

// los clasicos de siempre pero no tienen tipo explicito
var nulo = null
var nodefinido = undefined

// someone like to have a void in js
function go_ahead():void {
	;
}

// you can define several types for a var, ex. string or null
var hibrido: string | null;
hibrido = null
hibrido = "hola"

// several types and init value
var str_or_null: string | null = "5"

// operador null safety, evalua antes que no sea nula la variable y no sea undefined
var r: number | null = null
try {
	// generating the classic null pointer exception
	console.log( r.toString() )
} catch(ex){
	console.log( "** An exception ocurred:" )
	console.log( "** Exception info start." )
	console.log( ex )
	console.log( "** Exception info end." )
}
// the null safety operator prevents the exception generation
console.log( r?.toString() )

// declaring types (por algo se llama typescript, de tipos para js)
type Name = string
var nombre: Name

// type assertion and casting (no funciona lo que explico)
var n: any = 5

// one type of casting is with <type>, does not work as expected
console.log( typeof <string>n )

// this cast way does not work
//console.log( (n as string).toUpperCase() )

// also this not work, document is not defined
//const canvas = <HTMLCanvasElement>document.getElementById('canvas')

