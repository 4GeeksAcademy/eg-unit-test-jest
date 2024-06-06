// Import the function sum from the app.js file
const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds} = require('./app.js');



// Start your first test
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(dollars).toBe(expected);
})

test("1000 dolars is around ? yens", () => {
    const yen = fromDollarToYen(1000);
    const expected = (1000 / 1.07) * 156.5;
    expect(yen).toBe(expected);
})

test("1000 yens is ? pounds", () => {
    const pounds = fromYenToPounds(1000);
    const expected = (1000 / 156.5) * 0.87;
    console.log(expected);
    expect(pounds).toBe(expected);
})