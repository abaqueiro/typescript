var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// classical notation
function function1(str) {
    console.log(str);
    return true;
}
function1('function1 was called');
// arrow notation
var function2 = function (str) {
    console.log("str: ".concat(str)); // using a string template
    return true;
};
function2('australopithecus');
// more compact arrow notation when just returning a value
var square = function (x) { return x * x; };
console.log('square of 3 is ' + square(3));
// argument object
function show(point2D) {
    console.log('show call');
    console.log("(".concat(point2D.x, ",").concat(point2D.y, ")"));
}
show({ x: 1, y: 1 });
function show2(_a) {
    var x = _a.x, other = __rest(_a, ["x"]);
    console.log('show2 call');
    console.log('x = ' + x);
    console.log(__assign({ x: x }, other));
}
show2({ x: 3, y: 3, z: 3 });
