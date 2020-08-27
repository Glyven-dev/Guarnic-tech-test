const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
];

const expectedProductsAtDayZero = [
    { name: 'Medium Coverage', sellIn: 9, price: 19 },
    { name: 'Full Coverage', sellIn: 1, price: 1 },
    { name: 'Low Coverage', sellIn: 4, price: 6 },
    { name: 'Mega Coverage', sellIn: 0, price: 80 },
    { name: 'Mega Coverage', sellIn: -1, price: 80 },
    { name: 'Special Full Coverage', sellIn: 14, price: 21 },
    { name: 'Special Full Coverage', sellIn: 9, price: 50 },
    { name: 'Special Full Coverage', sellIn: 4, price: 50 },
    { name: 'Super Sale', sellIn: 2, price: 4 }
];



const productsAtAnotherDay = [
    new Product('Medium Coverage', 2, 20),
    new Product('Full Coverage', -1, 0),
    new Product('Low Coverage', 0, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 0, 20),
    new Product('Special Full Coverage', 8, 49),
    new Product('Special Full Coverage', 2, 49),
    new Product('Super Sale', 0, 6),
];

const expectedProductsAtAnotherDay = [
    { name: 'Medium Coverage', sellIn: 1, price: 19 },
    { name: 'Full Coverage', sellIn: -2, price: 2 },
    { name: 'Low Coverage', sellIn: -1, price: 5 },
    { name: 'Mega Coverage', sellIn: 0, price: 80 },
    { name: 'Mega Coverage', sellIn: -1, price: 80 },
    { name: 'Special Full Coverage', sellIn: -1, price: 0 },
    { name: 'Special Full Coverage', sellIn: 7, price: 50 },
    { name: 'Special Full Coverage', sellIn: 1, price: 50 },
    { name: 'Super Sale', sellIn: -1, price: 6 }
];

describe("Unit Testing", function() {

    it("Products at day 0", function() {
        const coTest = new CarInsurance(productsAtDayZero);
        const products = coTest.updatePrice();
        expect(products).to.eql(expectedProductsAtDayZero);
    });

    it("Products at another day", function() {
        const coTest = new CarInsurance(productsAtAnotherDay);
        const products = coTest.updatePrice();
        expect(products).to.eql(expectedProductsAtAnotherDay);
    });

});