export class Product{
    //Variables:
    price;

    //Builder:
    constructor(name, quantity, price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    };

    //Methods:
    getName(){
        return this.name;
    }

    getQuantity(){
        return this.quantity;
    }

    getPrice(){
        return this.price;
    }

    setName(name){
        this.name = name;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }

    setPrice(price){
        this.price = price;
    }

    getTotal(){
        return parseInt(this.price) * parseInt(this.quantity);
    }

    getInfo(){
        return `Product name: ${this.name}, quantity available: ${this.quantity}, current price: ${this.price} --- Total: ${this.getTotal()}`;
    }
}

/* export function Product(name, price, stock){
    //Variables declaration on call:
    let _name = name;
    let _price = price;
    let _stock = stock;

    //Getters & Setters
    this.getStock = function() {
        return _stock;
    };

    this.getName = function() {
        return _name;
    }

    this.getPrice = function() {
        return _price;
    }

    this.setStock = function(quantity){
        if(quantity >= 0){
            _stock = quantity;
        } else {
            console.log('Invalid stock quantity');
        }
    }

    this.setPrice = function(price){
        if(price >= 0){
            _price = price;
        } else {
            console.log('Invalid price');
        }
    }

    this.setName = function(newName){
        _name = newName;
    }
} */