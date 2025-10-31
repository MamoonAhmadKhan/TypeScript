interface User {
	id: number;
	name: string;
	email: string;
	password: string | number;
}

type UserUpdate = Partial<User>;

function updateUserProfile (user: UserUpdate): void {
	// Hit the Database to update the user
	console.log(`Updated Name: ${user.name}`);
}

updateUserProfile({
	name: "Mueed Ahmad",
	email: "mueed887@gmail.com"
});

updateUserProfile({
	email: "narendrachormodi@gmail.com"
});

updateUserProfile({
	name: "Ismael Haniyeh",
	password: "h@m@$786"
});