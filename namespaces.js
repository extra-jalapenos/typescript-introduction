"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
var Geometry;
(function (Geometry) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateArea(radius) {
            return PI * radius * radius;
        }
        Circle.calculateArea = calculateArea;
    })(Circle = Geometry.Circle || (Geometry.Circle = {}));
    var Rectangle;
    (function (Rectangle) {
        function calculateArea(width, height) {
            return width * height;
        }
        Rectangle.calculateArea = calculateArea;
    })(Rectangle = Geometry.Rectangle || (Geometry.Rectangle = {}));
})(Geometry || (exports.Geometry = Geometry = {}));
