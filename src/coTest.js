class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }
    updatePrice() {
        const updatedProducts = [];
        this.products.forEach((product) => {
            let haveDistinctProduct;
            if (product.name == 'Full Coverage') {
                haveDistinctProduct = true;
                if (product.sellIn > 0) {
                    product.price = product.price < 50 ? product.price + 1 : product.price;
                } else {
                    product.price = product.price < 50 && product.price + 2 <= 50 ? product.price + 2 : product.price;
                }
            }
            if (product.name == 'Mega Coverage') {
                haveDistinctProduct = true;
            }
            if (product.name == 'Special Full Coverage') {
                haveDistinctProduct = true;
                if (product.sellIn <= 10) {
                    if (product.sellIn <= 5) {
                        if (product.sellIn <= 0) {
                            product.price = 0;
                        } else {
                            product.price = product.price < 50 && product.price + 3 <= 50 ? product.price + 3 : 50;
                        }
                    } else {
                        product.price = product.price < 50 && product.price + 2 <= 50 ? product.price + 2 : 50;
                    }
                } else {
                    product.price = product.price < 50 ? product.price + 1 : product.price;
                }
            }
            if (product.name == 'Super Sale') {
                haveDistinctProduct = true;
                if (product.sellIn > 0) {
                    product.price = product.price < 50 && product.price != 0 && product.price - 2 >= 0 ? product.price - 2 : 0;
                }
            }
            if (!haveDistinctProduct) {
                if (product.sellIn > 0) {
                    product.price = product.price < 50 && product.price != 0 ? product.price - 1 : product.price;
                } else {
                    product.price = product.price < 50 && product.price != 0 && product.price - 2 >= 0 ? product.price - 2 : product.price;
                }
            }
            if (product.name != 'Mega Coverage') {
                product.sellIn = product.sellIn - 1;
            }
            updatedProducts.push(product);
        })
        return updatedProducts;
    }
}

module.exports = {
    Product,
    CarInsurance
}