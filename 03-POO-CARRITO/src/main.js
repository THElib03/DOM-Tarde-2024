/**
 * @author Martín Marín
 */
import Carrito from "./components/Carrito";

const cart = new Carrito;

/**
 * 
 */
function paintInterface(){
    //Function variables:
    const app = document.getElementById('app');

    //Function functions:
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = document.getElementById("product-name").value.trim();
        const quant = Number.parseInt(document.querySelector("#product-quant").value);
        const price = Number.parseInt(document.getElementById("product-price").value);

        if(!name || quant < 1 || price < 0.01){
            alert("One or more fields are empty, please enter values (and positive numbers) for all fields");
        }

        cart.addProduct(name, quant, price);

        paintCart();
    };

    app.innerHTML = `
        <h1>Your cart</h1>
        <form id="product-form" action="">
            <input id="product-name" type="text" placeholder="Product name" required>
            <input id="product-quant" type="number" placeholder="Quantity" required>
            <input id="product-price" type="number" placeholder="Price" required>
            <button type="submit">Add product</button>
        </form>  

        <ul id="product-list">

        </ul>
    `;

    document.getElementById('product-form').addEventListener('submit', handleFormSubmit);
    document.getElementById('product-list').addEventListener('click', productOptions);
}

const productOptions = (event) => {
    const index = Number(event.target.dataset.id);
    if(event.target.classList.contains('delete-btn')){
        cart.deleteProduct(index);
        console.log('hola');
        paintCart();
    }

    if(event.target.classList.contains('edit-btn')){

    }
}

function paintCart(){
    const list = document.getElementById('product-list');
    list.innerHTML = cart.products.map((product, index) => `<li data-id=${index}>${product.getInfo()}
        <button class="edit-btn" data-id=${index}>Edit</button>
        <button class="delete-btn" data-id=${index}>Delete</button>
    </li>`).join('');
};


//Start
paintInterface();