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
var Geometry;
(function (Geometry) {
    var Point2D = /** @class */ (function () {
        function Point2D(x, y) {
            this.x = x;
            this.y = y;
        }
        Point2D.prototype.toString = function () {
            return "(".concat(this.x, ",").concat(this.y, ")");
        };
        Point2D.prototype.computeDistanceTo = function (p) {
            return Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2));
        };
        return Point2D;
    }());
    Geometry.Point2D = Point2D;
    var Point3D = /** @class */ (function (_super) {
        __extends(Point3D, _super);
        function Point3D(x, y, z) {
            var _this = _super.call(this, x, y) || this;
            _this.z = z;
            return _this;
        }
        Point3D.prototype.toString = function () {
            return "(".concat(this.x, ",").concat(this.y, ",").concat(this.z, ")");
        };
        return Point3D;
    }(Point2D));
    Geometry.Point3D = Point3D;
})(Geometry || (Geometry = {}));
/// <reference path="lib/Geometry.ts" />
var p2d = new Geometry.Point2D(1, 1);
console.log('Log p2d object:');
console.log(p2d);
console.log('  pd2 toString method:');
console.log(p2d.toString());
console.log('  pd2 computeDistanceTo (4,5)');
console.log(p2d.computeDistanceTo(new Geometry.Point2D(4, 5)));
console.log('');
var p3d = new Geometry.Point3D(1, 2, 3);
console.log('Log p3d object:');
console.log(p3d);
console.log('pd3 toString method:');
console.log(p3d.toString());
