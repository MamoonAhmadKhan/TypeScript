interface Person {
    name: string;
    age: number;
    caste?: string;
    greet (phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;
    caste?: string;

    constructor (name: string, age: number, caste: string = "Unkown!") {
        this.name = name;
        this.age = age;
        this.caste = caste;
    }

    greet = (phrase: string): void => {
        console.log(`${phrase}, ${this.name}`);
        console.log(`Your age is ${this.age}`);
        console.log(`You are ${this.caste} by caste`);
    }
}

const Engineer = new Employee("Mamoon", 22, "Pakhtoon");
Engineer.greet("Good Morning");

const Analyst = new Employee("Pratham", 23, "Unkown");
Analyst.greet("Oye Bihari");