type User = {
    name: string;
    age: number;
    gender?: string;
}

function getUser (user: Required<User>) { 
    // with this utility type (Required), user is forced to enter his/her gender
    console.log("Name: ", user.name);
    console.log("Age: ", user.age);
    console.log("Gender: ", user.gender);
}

getUser({
    name: "Mamoon",
    age: 22,
    gender: "Male",
});