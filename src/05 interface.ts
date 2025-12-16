// * * * INTERFACES * * *

// Interfaces & Types can be used interchangeabley, but for objects - Interfaces are preferrable

// Interface with objects
interface User {
    name: string;
    email: string;
    password: string | number;
    age: number;
}

const user1: User = {
    name: "Mamoon",
    email: "mamoon12@gmail.com",
    password: "Mamoon1234",
    age: 22,
}

// Interface with functions
interface UserData {
    (user: User): Partial <User>;
}

const getUserData: UserData = (user: User): Partial <User> => {
    return {
        name: user.name,
        age: user.age,
        email: user.email,
    }
}

const mamoon = getUserData(user1);
console.log(mamoon);

const adeel = getUserData({
    name: "Adeel",
    email: "adeel87@gmail.com",
    password: 8734234,
    age: 24,
});
console.log(adeel);








// * * * INTERFACE IMPLEMENTATION IN CLASSES * * *

// interface Person {
//     name: string;
//     age: number;
//     caste?: string;
//     greet (phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;
//     caste?: string;

//     constructor (name: string, age: number, caste: string = "Unkown!") {
//         this.name = name;
//         this.age = age;
//         this.caste = caste;
//     }

//     greet = (phrase: string): void => {
//         console.log(`${phrase}, ${this.name}`);
//         console.log(`Your age is ${this.age}`);
//         console.log(`You are ${this.caste} by caste`);
//     }
// }

// const Engineer = new Employee("Mamoon", 22, "Pakhtoon");
// Engineer.greet("Good Morning");

// const Analyst = new Employee("Pratham", 23, "Unkown");
// Analyst.greet("Oye Bihari");