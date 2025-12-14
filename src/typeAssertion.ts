// * * * EXAMPLE -> 1 * * *
let name: any = "Mamoon";
let nameLength: number = (name as string).length;
console.log("Length of string ", name, " is ", nameLength);


// * * * EXAMPLE -> 2 * * *
type Book = {
    name: string;
}

let bookString = '{"name": "Algorithms Made Easy"}';
let bookOb = JSON.parse(bookString) as Book;
console.log(bookOb.name);