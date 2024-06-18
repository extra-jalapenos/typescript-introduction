export namespace Geometry {
  export namespace Circle {
      const PI = 3.14
      export function calculateArea (radius: number): number {
      return PI * radius * radius
    }
  }

  export namespace Rectangle {
    export function calculateArea (width: number, height: number) {
      return width * height
    }
  }
}
