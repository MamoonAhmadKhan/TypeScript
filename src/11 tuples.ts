let tuple1: [number, string];
tuple1 = [10, "Hello"];
console.log(tuple1);

let tuple2: [string, number, boolean?] = ["Mamoon", 22, true];
console.log(tuple2);

let readOnlyTuple: readonly [number, number] = [10, 20];
// readOnlyTuple.push(3); // Error
console.log(readOnlyTuple);

let namedTuple: [name: string, age: number];
namedTuple = ["mamoon", 22];
console.log(namedTuple);