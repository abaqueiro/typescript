
// classical notation
function function1( str:string ): boolean{
	console.log( str )
	return true
}
function1( 'function1 was called' )



// arrow notation
const function2 = ( str:string ):boolean => {
	console.log( `str: ${str}` )  // using a string template
	return true
}
function2( 'australopithecus' )



// more compact arrow notation when just returning a value
const square = (x:number) => x * x
console.log( 'square of 3 is ' + square(3) )




// argument object
function show( point2D:{x:number, y:number} ){
	console.log('show call')
	console.log(`(${point2D.x},${point2D.y})`)
}
show( {x:1, y:1 } )

// argument object properties extraction
//function show2( { x, ...other }:{x:number} ){
type Point3D_type = {
	x: number
	y: number
	z: number
}
function show2( { x, ...other }: Point3D_type ){
	console.log('show2 call')
	console.log( 'x = ' + x )
	console.log( { x, ...other } )
}
show2( { x:3, y:3, z:3 } )

