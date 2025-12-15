enum CupSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XLARGE = "x-large"
}

function makeChai (cupSize: CupSize) {
    console.log(`Making Chai in ${cupSize} cup`);
}

makeChai(CupSize.MEDIUM);
makeChai(CupSize.XLARGE);