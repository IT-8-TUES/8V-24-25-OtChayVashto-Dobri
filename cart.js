/*Tsveta*/ 
    function addToCart(button) {
    const productEl = button.closest('.product-info');
    const name = productEl.querySelector('.text p');
    const quant = parseInt(productEl.querySelector(".quantity-box").value);
    const itemPrice = 8.99;
    const price = (itemPrice * quant).toFixed(2);
    const item = {
        name: name,
        quant: quant,
        itemPrice: itemPrice,
        price: price
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    cartQuant(); 
    console.log(price);
}

function cartQuant(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach(item => total += item.quant);
    const carCountEl = document.getElementById("cart-count");
    if(carCountEl){
        carCountEl.textContent = total;
    }
}
document.addEventListener("DOMContentLoaded", cartQuant);

/*Tsveta*/