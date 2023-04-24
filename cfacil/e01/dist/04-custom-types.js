var unaPersona = {
    nombre: 'Alfonso',
    apaterno: 'Baqueiro',
    amaterno: 'Bernal'
};
unaPersona.nombre = 'Poncho';
console.log(typeof unaPersona);
console.log(JSON.stringify(unaPersona));
var someUser = {
    persona: {
        nombre: 'Liam',
        apaterno: 'Baqueiro',
        amaterno: 'Flores'
    },
    type: 'superuser'
};
console.log(JSON.stringify(someUser));
