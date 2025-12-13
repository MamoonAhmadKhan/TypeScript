// * * * EXAMPLE -> 1 * * *
type Order = string | number;

function pizzaOrder (order: Order): string {
    if (typeof order === "string") {
        // It will give all the suggestions of String methods after putting a dot (.) after 'order'
        let str = `Preparing your order, name: ${order}`;
        return str;
    }
    else {
        // It will give all the suggestions of Number methods after putting a dot (.) after 'order'
        let str = `Your order number is ${order}`;
        return str;
    }
}

let order1 = pizzaOrder("Margherita Pizza");
let order2 = pizzaOrder(48);

console.log(order1);
console.log(order2);
console.log("");

// * * * EXAMPLE -> 2 * * *
type MasalaChai = { type: "masala", spice: number };
type AdrakChai = { type: "adrak", amount: number };
type ElaichiChai = { type: "elaichi", aroma: number };

type Chai = MasalaChai | AdrakChai | ElaichiChai;

function makeChai (chai: Chai): string {
    switch (chai.type) {
        case "masala":
            return `Masala Chai with spice level ${chai.spice}`;
            break;
        case "adrak":
            return `Adrak Chai with ${chai.amount} adrak`;
            break;
        case "elaichi":
            return `Elaichi Chai with ${chai.aroma} aroma`;
            break;
    }
}

console.log(makeChai({type: "masala", spice: 3}));
console.log(makeChai({type: "elaichi", aroma: 1}));
console.log(makeChai({type: "adrak", amount: 2}));