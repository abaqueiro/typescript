// ts allow type declaration
var age = 25;
var age_str = "25";
var isSenior = true;
var person = {};
var fruitA = ['manzana', 'pera', 'platano'];
var verduraA = ['lechuga', 'pepino', 'coliflor'];
var something = true;
something = 1;
something = "hello";
something = {};
something = [];
// no explica para que es, se concreta a decir que es más controlado que any
var desconocido;
// los clasicos de siempre pero no tienen tipo explicito
var nulo = null;
var nodefinido = undefined;
// someone like to have a void in js
function go_ahead() {
    ;
}
// you can define several types for a var, ex. string or null
var hibrido;
hibrido = null;
hibrido = "hola";
// several types and init value
var str_or_null = "5";
// operador null safety, evalua antes que no sea nula la variable y no sea undefined
var r = null;
try {
    // generating the classic null pointer exception
    console.log(r.toString());
}
catch (ex) {
    console.log("** An exception ocurred:");
    console.log("** Exception info start.");
    console.log(ex);
    console.log("** Exception info end.");
}
// the null safety operator prevents the exception generation
console.log(r === null || r === void 0 ? void 0 : r.toString());
var nombre;
// type assertion and casting (no funciona lo que explico)
var n = 5;
// one type of casting is with <type>, does not work as expected
console.log(typeof n);
// this cast way does not work
//console.log( (n as string).toUpperCase() )
// also this not work, document is not defined
//const canvas = <HTMLCanvasElement>document.getElementById('canvas')
