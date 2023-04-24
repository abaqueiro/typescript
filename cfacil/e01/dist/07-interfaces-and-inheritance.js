var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure() {
        this.side_length = NaN;
        this.n_sides = NaN;
    }
    Figure.prototype.getNumberOfSides = function () {
        return this.n_sides;
    };
    Figure.prototype.computePerimeter = function () {
        return this.n_sides * this.side_length;
    };
    Figure.prototype.computeArea = function () {
        return NaN;
    };
    return Figure;
}());
console.log('Creating a Figure ...');
var fig = new Figure();
console.log('  side length: ' + fig.side_length);
console.log('  setting side length to 25 ...');
fig.side_length = 25;
console.log('  side length: ' + fig.side_length);
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this) || this;
        _this.n_sides = 3;
        _this.side_length = 1;
        return _this;
    }
    Triangle.prototype.computeArea = function () {
        return this.side_length / 2 * Math.sqrt(3);
    };
    return Triangle;
}(Figure));
console.log('');
console.log('Creating a Triangle ...');
var tri = new Triangle;
tri.side_length = 3;
console.log('  side length: ' + tri.side_length);
console.log('  getNumberOfSides: ' + tri.getNumberOfSides());
console.log('  computePerimeter: ' + tri.computePerimeter());
console.log('  computeArea: ' + tri.computeArea());
