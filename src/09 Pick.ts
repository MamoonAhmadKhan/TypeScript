interface User {
    id: number;
    name: string;
    email: string;
    password: string | number;
}

type displayUserInfo = Pick<User, "name" | "email">;

const getUserInfo = (user: displayUserInfo): void => {
    console.log("Name: ", user.name);
    console.log("Email: ", user.email);
}

getUserInfo({
    name: "Mamoon Ahmad",
    email: "khanmamoon887@gmail.com",
});