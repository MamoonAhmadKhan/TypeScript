type Employee = {
	name: string;
	age: number;
}

interface Manager {
	name: string;
	department: string;
}

type TeamLead = Employee & Manager;

const teamLead1: TeamLead = {
	name: "Mamoon Ahmad",
	age: 23,
	department: "Engineering",
};

console.log(`Name: ${teamLead1.name}`);
console.log(`Age: ${teamLead1.age}`);
console.log(`Department: ${teamLead1.department}`);
