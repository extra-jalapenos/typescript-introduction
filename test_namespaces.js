"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namespaces_1 = require("./namespaces");
var circleArea = namespaces_1.Geometry.Circle.calculateArea(20);
var rectangleArea = namespaces_1.Geometry.Rectangle.calculateArea(10, 4);
console.log(circleArea);
console.log(rectangleArea);
