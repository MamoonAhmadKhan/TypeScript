// *** instead of assigning each property as readonly, ***
// interface Config {
//	readonly endpoint: string;
//	readonly apikey: string;
// }

interface Config {
	endpoint: string;
	apikey: string;
}

// *** you can directly assign 'Readonly' while creating the object ***

const config: Readonly<Config> = {
	endpoint: '<https://api.example.com>',
	apikey: 'abcdef123456',
}

console.log(config);