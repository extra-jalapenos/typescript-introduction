interface Person {
	readonly id: number,
	name: string,
	firstname?: string,
  age: number
}

let p1: Person = new Person();
p1.name = "Ally";
p1.age = 30;


interface car {
	name: string;
}

interface CarType extends car {
	model: string;
}
