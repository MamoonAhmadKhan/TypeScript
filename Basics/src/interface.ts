interface User {
    name: string;
    email: string;
    password: string;
    gender?: string;
}

interface Admin extends User {
    id: number;
    loggedIn: boolean;
}

function getUserData (ob: User): void {
    console.log(`Name: ${ob.name}`);
    console.log(`Email ID: ${ob.email}`);
    console.log(`Password: ${ob.password}`);
    console.log(`Gender: ${ob.gender || "Unknown"}`);
    console.log("");
}

function getAdminData (ob: Admin): void {
    console.log(`Id: ${ob.id}`);
    console.log(`Logged-In: ${ob.loggedIn ? "Online" : "Offline"}`);
    console.log(`Name: ${ob.name}`);
    console.log(`Email ID: ${ob.email}`);
    console.log(`Password: ${ob.password}`);
    console.log(`Gender: ${ob.gender || "Unknown"}`);
    console.log("");
}

getUserData({
    name: "Mamoon Ahmad",
    email: "mamoon887@gmail.com",
    password: "Mamoon@1122",
    gender: "Male"
});

getUserData({
    name: "Adeel Khan",
    email: "adeel9319@gmail.com",
    password: "adeel@2341"
});

getAdminData({
    name: "Mueed Ahmad",
    email: "mueedahmad7428@gmail.com",
    password: "Mueed74288",
    gender: "Male",
    id: 786,
    loggedIn: false
});