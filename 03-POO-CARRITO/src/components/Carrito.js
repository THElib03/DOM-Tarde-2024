import { Product } from "./Product";

export default class Carrito{
    //Variables:


    //Builder:
    constructor(){
        this.products = [];
        this.total = 0;

        this.loadProducts();
    }

    //Methods:
    /**
     * Adds a new product to this carrito
     * @param {String} name 
     * @param {Number} price 
     * @param {Number} quantity 
     */
    addProduct(name, quantity, price){
        this.products.push(new Product(name, quantity, price));
        // Save to local storage
        this.saveProducts();
    }

    /**
     * 
     * @param {Number} index 
     */
    deleteProduct(index){
        this.products.splice(index, 1);
        // Update local storage
        this.saveProducts();
    }

    editProduct(index, newQuantity){
        if(newQuantity > 0){
            this.products[index].quantity = newQuantity;
        }
    }

    getTotal(){
        this.total = this.products.reduce((ttl, product) => {
            return ttl + product.getTotal();
        });
    }

    saveProducts(){
        localStorage.setItem('carrito', JSON.stringify(this.products));
    }

    loadProducts(){
        const cart = JSON.parse(localStorage.getItem('carrito'));

        if(cart){
            this.products = []
            cart.forEach(({ name, quantity, price }) => {
                this.products.push(new Product(name, quantity, price));
            });
        }
    }
}