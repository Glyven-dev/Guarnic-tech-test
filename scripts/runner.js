const coTest = require('../src/coTest');

const productsAtDayZero = [
    new coTest.Product('Medium Coverage', 10, 20),
    new coTest.Product('Full Coverage', 2, 0),
    new coTest.Product('Low Coverage', 5, 7),
    new coTest.Product('Mega Coverage', 0, 80),
    new coTest.Product('Mega Coverage', -1, 80),
    new coTest.Product('Special Full Coverage', 15, 20),
    new coTest.Product('Special Full Coverage', 10, 49),
    new coTest.Product('Special Full Coverage', 5, 49),
    new coTest.Product('Super Sale', 3, 6),
];

const carInsurance = new coTest.CarInsurance(productsAtDayZero);
const productPrinter = function(product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 0; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    if (i != 0) {
        carInsurance.updatePrice().forEach(productPrinter);
    } else {
        productsAtDayZero.forEach(productPrinter);
    }
    console.log('');
}