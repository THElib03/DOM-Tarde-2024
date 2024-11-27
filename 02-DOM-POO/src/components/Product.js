export function Product(name, price, stock){
    //Builder
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
}