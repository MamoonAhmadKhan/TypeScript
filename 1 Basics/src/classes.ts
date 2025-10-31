class SmartPhone {
    protected readonly model: string;
    protected readonly price: number;
    protected readonly screenSize: string;
    public static Category: string = "Electronics";

    constructor (model: string, price: number, screenSize?: string) {
        this.screenSize = screenSize || "Normal";
        this.model = model;
        this.price = price;
    }

    public getPhoneData = () => {
        console.log(`Smartphone -> ${this.model}`);
        console.log(`Price -> Rs.${this.price}`);
        console.log(`Screen Size -> ${this.screenSize}\n`);
    }
}

class Tablet extends SmartPhone {
    constructor (model: string, price: number, screenSize: string) {
        super(model, price, screenSize);
    }

    public getTabletData = () => {
        console.log(`Smartphone -> ${this.model}`);
        console.log(`Price -> Rs.${this.price}`);
        console.log(`Screen Size -> ${this.screenSize}\n`);
    }
}

let ph1 = new SmartPhone("Realme 8i", 15000);
ph1.getPhoneData();

let tb1 = new Tablet("Apple I-Pad 9 Pro", 75000, "Large");
tb1.getTabletData();

let ph2 = new SmartPhone("Samsung S25 Ultra", 145000);
ph2.getPhoneData();

let ph3 = new SmartPhone("Tecno Pop 9 5g", 9500);
ph3.getPhoneData();

let tb2 = new Tablet("Xiaomi Tab 4", 17000, "Large");
tb2.getTabletData();

console.log(`Smartphone Category : ${SmartPhone.Category}`);
console.log(`Tablet Category : ${Tablet.Category}`);