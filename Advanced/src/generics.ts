function generic <T> (args: T): T {
	return args;
}

const res1 = <string> generic("Hello !");
console.log(res1);
console.log(res1.toUpperCase());

const res2 = <number> generic(4);
console.log(res2);
console.log(res2.toFixed(3));

const res3 = <boolean> generic(true);
console.log(res3);


// GENERICS with Arrays

function genericArrFunc <T> (args: T[]) {
	return args[1];
}

const arr1 = <string> genericArrFunc(["C++", "TypeScript", "Python", "Swift"]);
console.log(arr1);
console.log(arr1.toUpperCase());

const arr2 = <number> genericArrFunc([2.34, 5.4, 8.02, 3.74]);
console.log(arr2);
console.log(Math.floor(arr2));
