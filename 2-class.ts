interface HomeAdresses {
	adresses: string[]
}

class Person {
	private readonly name: string;

	public constructor(name:string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}
