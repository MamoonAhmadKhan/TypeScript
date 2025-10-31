interface User {
    id: number;
    name: string;
    email: string;
    password: string | number;
}

type UserDisplay = Pick<User, 'name' | 'email'>;

function displayUserProfile (user: UserDisplay): void {
 console.log(`Name: ${user.name}`);
 console.log(`Email: ${user.email}`);   
}

displayUserProfile({
    name: "Mamoon Ahmad",
    email: "khanmamoon887@gmail.com"
});