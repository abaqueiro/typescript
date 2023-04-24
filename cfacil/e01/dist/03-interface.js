var _a;
// throws error for lacking properties
/*
var personaA: Person  = {
    name: 'Poncho'
}
*/
var personaA;
personaA = {
    name: 'Poncho',
    code: '03',
    charge: 'Development Manager',
    sayHello: function () { return 5; }
};
var personaB = {
    name: 'Gurrumina',
    code: 25,
    charge: 'pajarita',
    sayHello: function () {
        return 25;
    }
};
console.log(JSON.stringify(personaA));
console.log('personaA.description.toUpperCase:' + ((_a = personaA.description) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
