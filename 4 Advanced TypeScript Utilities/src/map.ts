interface User {
	id: string;
	name: string;
}

const users = new Map<string, User>();

users.set('abc123', {
	id: 'abc123',
	name: 'Mamoon Ahmad',
});

users.set('xyz789', {
	id: 'xyz789',
	name: 'Adeel Khan'
});

const user1 = users.get('abc123');
const user2 = users.get('xyz789');

console.log(user1);
console.log(user2);
