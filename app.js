// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b;
}

// Just a console log for ourselves
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

function fromDollarToYen (dollars) {
    const euros = dollars / 1.07;
    const yen = euros * 156.5;
    return yen;
}

function fromYenToPounds (yen) {
    const euros = yen / 156.5;
    const pounds = euros * 0.87;
    return pounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen , fromYenToPounds};