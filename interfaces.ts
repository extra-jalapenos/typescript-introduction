interface person {
	readonly id: number,
	name: string,
	firstname?: string,
  age: number
}

let p1: person;
p1.name = "Ally";
p1.age = 30;


interface car {
	name: string;
}

interface CarType extends car {
	model: string;
}

let test: CarType;

test.
