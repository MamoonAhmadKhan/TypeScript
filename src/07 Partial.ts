type Biryani = {
    name: string;
    price: number;
    isSpicy: boolean;
}

let chickenBiryani: Biryani = {
    name: "Chicken Biryani",
    price: 240,
    isSpicy: false,
}

type updateBiryani = Partial<Biryani>;

function updateBiryaniPrice (biryani: updateBiryani): void {
    biryani.price = 280;
    console.log(`Updating Biryani's price to ${biryani.price}`);
}

function makeBiryaniSpicy (biryani: updateBiryani): void {
    if (!biryani.isSpicy) return ;
    biryani.isSpicy = true;
    console.log(`Making your Chicken biryani Spicy. Spice:${biryani.isSpicy}`);
}

updateBiryaniPrice({price: 280});
makeBiryaniSpicy({isSpicy: true});