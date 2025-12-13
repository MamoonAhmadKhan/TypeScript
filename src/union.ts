let mamoonAge: number | string = 22;
console.log(`Mamoon bhai ki umar ${mamoonAge} saal hai.`);

mamoonAge = "22";
console.log(`Mamoon bhai ki umar ${mamoonAge} saal hai`);

let apiRequest: "Pending" | "Success" | "Error" = "Pending";
console.log(`Network request is ${apiRequest}`);

apiRequest = "Error";
console.log(`There is an ${apiRequest} in a Network request`);

apiRequest = "Success";
console.log(`${apiRequest}: Network request completed`);
