console.log("* * * * Array of Names * * * *");
const names: string[] = ["Mamoon", "Adeel", "Shazan", "Abdullah", "Daniyal"];
for(const name of names) {
    console.log(name);
}

console.log("\n* * * * Array of Odd Numbers * * * *");
const oddNumbers: number[] = [1, 3, 5, 7, 9];
oddNumbers.forEach(num => console.log(num))

console.log("\n* * * * Array of First Six Prime Numbers * * * *");
const firstSixPrimeNumbers: Array<number> = [2, 3, 5, 7, 11, 13];
for (let i = 0; i < firstSixPrimeNumbers.length; i++) {
    console.log(firstSixPrimeNumbers[i]);
}

console.log("\n* * * * Array of Objects of Employees * * * *");
interface Employee {
    name: string;
    profile: string;
    salary: number;
}

const employees: Employee[] = [{
    name: "Mamoon Ahmad",
    profile: "Software Engineer",
    salary: 24500,
}, {
    name: "MD Anas",
    profile: "Python Developer",
    salary: 21000,
}, {
    name: "Pratham Kumar",
    profile: "Dev-Ops Engineer",
    salary: 26000,
}];

employees.map((employee) => {
    console.log(`Name: ${employee.name}`);
    console.log(`Profile: ${employee.profile}`);
    console.log(`Salary: Rs.${employee.salary}\n`);
});

console.log("\n* * * * Readonly Array * * * *");
const cities: readonly string[] = ["New Delhi", "Mumbai", "Aligarh", "Lucknow"];
// cities.push("Agra");   // Error 
// cities.pop();          // Error
cities.forEach(city => console.log(city));

console.log("\n* * * * Multi-Dimensional Array * * * *");
const multiDimArray: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

for (const row of multiDimArray) {
    for (const col of row) {
        console.log(col);
    }
}