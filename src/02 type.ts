type User = {
    firstName: string;
    lastName: string;
    age: number;
}

function getUser (user: User): void {
    console.log(`Firstname: ${user.firstName}`);
    console.log(`Lastname: ${user.lastName}`);
    console.log(`Age: ${user.age}`);
}

getUser({
    firstName: "Mamoon",
    lastName: "Ahmad",
    age: 22,
})