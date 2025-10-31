interface User {
	id: string;
	name: string;
}

type Users = Record<string, User>

const users: Users = {
  'abc123': { id: 'abc123', name: 'Mamoon Ahmad' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']);
console.log(users['xyz789']);
