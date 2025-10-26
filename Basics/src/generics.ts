// * * * * Generic Functions * * * *

console.log("\n* * * GENERIC FUNCTIONS * * *\n");

function func <T> (args: T): void {
    console.log(`${args} -> ${typeof args}`);    
}

func<string>("TypeScript"); // We can also skip to specify the type while calling
func<number>(786);
func<boolean>(true);
func<number[]>([2, 4, 6, 8]);

// Created a Generic Function "likho" to print anything like console.log
function likho <T> (args: T): void {
    console.log(args);
}

likho("Hello TypeScript");
likho(786);
likho([1, 3, 5, 7, 9]);


// * * * * Generic Interfaces * * * *

console.log("\n* * * GENERIC INTERFACES * * *\n");

interface Halua <T> {
    name: string;
    age: number;
    key: T;
}

function haluaFunc (ob: Halua <boolean>) {
    console.log(`Name: ${ob.name}`);
    console.log(`Age: ${ob.age}`);
    console.log(`Key: ${ob.key}`);
}

haluaFunc({
    name: "Mamoon",
    age: 23,
    key: true
});


// * * * * Generic Classes * * * *

console.log("\n* * * GENERIC CLASSES * * *\n");

class Lock <T> {
    public lockName: string;
    public key: T;

    constructor (lockName: string, key: T) {
        this.lockName = lockName;
        this.key = key;
    }
}

const L1 = new Lock("linc", 8744);
console.log(L1);

const L2 = new Lock("Tez", "m35hi4l");
console.log(L2);