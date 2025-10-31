interface Person {
	name: string;
	age: number;
	greet(phrase: string): void;
}

class Employee implements Person {
	name: string;
	age: number;

	constructor (name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet = (phrase: string) => {
		console.log(`Hello ${this.name}, ${phrase}`);
	}
}

const engineer = new Employee("Mamoon", 23);
engineer.greet("Hope you're doing well !");