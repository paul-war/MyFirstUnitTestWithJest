const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolars, then 3.5 euros should be = (3.5 * 1.2)
});

test("One Dollar should be 106.58 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(1)

    // if 1 dollar are 127.9 yens, then 4.2 dollars should be (4.2 * 127.9)
    const expected = 106.58333333333334; 
    
    // this is the comparison for the unit test
    expect(fromDollarToYen(1)).toBe(106.58333333333334); //1 dollar are 106.58 yens, then 4.2 dollars should be = (4.2 * 127.9)
});

test("One Yen should be 0.00625488663017982799061767005473 Pounds", function (){
    const { fromYenToPound } = require ("./app.js")
    const Pounds = fromYenToPound(1)
    const expected = 0.00625488663017982799061767005473;
    expect(fromYenToPound(1)).toBe(0.00625488663017982799061767005473);
});