function Logger(constructor: any) {
  console.log(`creating an instance of: ${constructor.name}`)
}

// this is the constructor
@Logger
class Human {
  constructor(public name: string, public age: number) {
    console.log("this is the constructor")
  }
}

const human = new Human("John", 30)
