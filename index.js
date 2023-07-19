function Product(name, price, amount) {
  this.name = name;
  this.price = price;
  this.amount = amount;
  this.discount = 0;
}

function ProductPrototype() {
  //showInfo() - повертає рядок з усіма данними
  this.showInfo = function () {
    return `
    Name of product: ${this.name} 
    Price: ${this.price}
    Amount: ${this.amount} 
    Discount: ${this.discount}
      `;
  };
  //setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну товару, з урахуванням знижки
  this.setSaleToPrice = function (value = 0) {
    this.discount = value;
    if (validateNumber(value)) {
      return this.price = (this.price - this.price * (this.discount / 100));
    }
    return null;
  };
  //buyAmountProduct(amountValue) - повертає загальну вартість, якщо є достатня кількість, якщо не має повертаєте - null
  this.buyAmountProduct = function (amountValue) {
    if (validateNumber(amountValue) && amountValue <= this.amount) {
      this.amount -= amountValue;
      return amountValue * this.price;
    }
    return null;
  };
}

function validateNumber(value) {
  return (
    value !== null && value !== "" && value >= 0 && !Number.isNaN(Number(value))
  );
}

Product.prototype = new ProductPrototype();

const product1 = new Product("Water", 430, 200);
console.log(product1.showInfo());
console.log(product1.setSaleToPrice(50));
console.log(product1.buyAmountProduct(30));

const product2 = new Product("Flour", 750, 150);
console.log(product2.showInfo());
console.log(product2.setSaleToPrice(20));
console.log(product2.buyAmountProduct(3));


const product2 = new Product("Flour", 750, 150);
console.log(product2.showInfo());
console.log(product2.setSaleToPrice(20));
console.log(product2.buyAmountProduct(3));
