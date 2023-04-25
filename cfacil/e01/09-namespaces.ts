/// <reference path="lib/Geometry.ts" />

const p2d = new Geometry.Point2D(1,1)
console.log( 'Log p2d object:' )
console.log( p2d )
console.log( '  pd2 toString method:' )
console.log( p2d.toString() )
console.log( '  pd2 computeDistanceTo (4,5)' )
console.log( p2d.computeDistanceTo( new Geometry.Point2D(4,5) ) )

console.log( '' )

const p3d = new Geometry.Point3D(1,2,3)
console.log( 'Log p3d object:' )
console.log( p3d )
console.log( 'pd3 toString method:' )
console.log( p3d.toString() )

