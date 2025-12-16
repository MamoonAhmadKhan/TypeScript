// Abtract class & Abstract methods used to make blueprint for extended classes like interfaces in TypeScript
abstract class Drink {
    abstract make(): void;
}

class MilkShake extends Drink {
    // static variable -> can be accessed without any object
    public static shopeName: string = "ShakeHUB by\n --Mamoon Ahmad Khan\n"; // public -> accessible anywhere
    protected flavour: string; // protected -> accessible in inherited class only
    protected honey: boolean; // protected -> accessible in inherited class only
    protected price: number; // protected -> accessible in inherited class only
    private _sugar: number = 2; // private -> only accessible inside the class

    constructor (flavour: string, honey: boolean) {
        super(); // super() method is used to call the parent class constructor
        this.flavour = flavour; // this refers to the current object of the class
        this.honey = honey;
        this.price = this.honey ? 290 : 240;
    }

    make () { // abstract method implementation
        console.log("Preparing your Drink...\n");
    }

    // setter method to access private properties
    set sugar (level: number) {
        if (level > 5) {
            throw new Error(`Too much Sugar !!\n Dangerous for health !`);
        }
        else {
            this._sugar = level;
        }
    }

        // getter method to get the value of private properties
    get sugar () {
        return this._sugar;
    }

    getMilkShake () {
        if (this.honey) {
            console.log(`Your ${this.flavour} Shake with Honey is ready !`);
        } 
        else {
            console.log(`Your ${this.flavour} Shake without Honey is ready`);
        }
        console.log(`Total bill: 💵 ${this.price}`);
    }
}

// Inheritance
class SpecialStrawberryShake extends MilkShake {
    constructor (flavour: string, honey: boolean) {
        super(flavour, honey);
        this.price = this.honey ? 350 : 320;
    }
}

// static variable -> can be accessed directly with class name without creating any object
console.log(MilkShake.shopeName);

const mangoShake = new MilkShake("Mango", false);
mangoShake.make();
mangoShake.getMilkShake();
console.log("Sugar Level - ", mangoShake.sugar, "\n");

const chocolateShake = new MilkShake("Chocolate", true);
chocolateShake.sugar = 4;
chocolateShake.getMilkShake();
console.log("Sugar Level - ", chocolateShake.sugar, "\n");

const strawberryShake = new SpecialStrawberryShake("Strawberry", true);
strawberryShake.sugar = 3;
strawberryShake.getMilkShake();
console.log("Sugar Level - ", strawberryShake.sugar, "\n");