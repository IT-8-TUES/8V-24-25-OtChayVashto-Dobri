/*Tsveta*/ 
    function addToCart() {
    const itemPrice = 8.99;
    const quant = parseInt(document.querySelector(".quantity-box").value);
    const price = (itemPrice * quant).toFixed(2);
    const item = {
        name: " Lush Lemon",
        quant: quant,
        itemPrice: itemPrice,
        price: price
    };
    console.log(price);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    
}



/*Tsveta*/