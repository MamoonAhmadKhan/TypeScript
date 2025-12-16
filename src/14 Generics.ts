function genericFunc <T> (args: T): T {
    return args;
}

const str = <string> genericFunc("Mamoon");
console.log(str, " -> ", typeof str);


// Generics with Interfaces & objects
interface genericInterface <T> {
    content: T;
}

const ob1: genericInterface <string> = {
    content: "Hello World !",
}
console.log(ob1.content);

const ob2: genericInterface <number> = {
    content: 45,
}
console.log(ob2.content);

const ob3: genericInterface <boolean> = {
    content: false,
}
console.log(ob3.content);