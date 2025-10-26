function func (name: string, cb: (age: number) => void) {
    console.log(name);
    cb(25);
}

func("Mamoon Ahmad", (age: number) => {
    console.log(`Age: ${age}`);
});