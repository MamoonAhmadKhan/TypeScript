interface User {
	name: string;
	age: number;
}

function filteredUsers (users: User[]) {
	return users.filter((user) => {
		return user.age >= 18;
	});
}

const usersArr = [
	{
		name: "Mamoon",
		age: 23,
	},
	{
		name: "Zidan",
		age: 6,
	},
	{
		name: "Adeel",
		age: 24,
	},
	{
		name: "Daniyal",
		age: 13,
	},
	{
		name: "Shazan",
		age: 22
	}
];

const eligibleUsers = filteredUsers(usersArr);
console.log(eligibleUsers);
