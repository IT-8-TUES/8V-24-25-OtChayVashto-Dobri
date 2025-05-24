/*Tsveta*/ 
function addToCart(button) {
    const productEl = button.closest('.product-info');
    const name = productEl.querySelector('.text p').textContent.trim();
    const quant = parseInt(productEl.querySelector(".quantity-box").value);
    const itemPrice = 8.99;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existItem = cart.find(p => p.name === name);
    if (existItem) {
        existItem.quant += quant;
        existItem.price = (existItem.quant * itemPrice).toFixed(2);
    }
    else {
        cart.push( {
            name: name,
            quant: quant,
            itemPrice: itemPrice,
            price: (quant * itemPrice).toFixed(2)
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    cartQuant();
}

function cartQuant(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quant, 0);
    const carCountEl = document.getElementById("cart-count");
    if(carCountEl){
        carCountEl.textContent = total;
    }
}
document.addEventListener("DOMContentLoaded", cartQuant);

document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const divProducts = document.querySelectorAll(".added-product");
    if (cart.length === 0) {
        divProducts.forEach(prod => prod.style.display = "none");
        const empty = document.createElement("p");
        empty.textContent = "Your cart is empty.";
        empty.style.textAlign = "center";
        empty.style.fontSize = "20px";
        return;
    }
    divProducts.forEach(prod => prod.style.display = "none");
    cart.forEach(item => {
        const prod = Array.from(divProducts).find(p => {
            const nameEl = p.querySelector(".product-name p");
            return nameEl && typeof item.name === "string" && nameEl.textContent.trim() === item.name.trim();
        });
        if (prod) {
            prod.style.display = "flex";
            const qtyEl = prod.querySelector(".quantity-control p");
            if (qtyEl) {
                qtyEl.textContent = item.quant;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("reset-button");
    button.addEventListener("click", function () {
        localStorage.removeItem("cart");
        location.reload();
    })
})

/*Tsveta*/


/*Lily*/
function increase(button) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let count = parseInt(quantityElement.innerText);
    count++;
    quantityElement.innerText = count;
    calculateTotal();
  }

  function decrease(button) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let count = parseInt(quantityElement.innerText);
    if (count > 1) {
      count--;
      quantityElement.innerText = count;
      calculateTotal();
    }
  }
  
  function calculateTotal() {
  const productElements = document.querySelectorAll('.added-product');
  const quantities = document.querySelectorAll('.quantity');
  let total = 0;

  productElements.forEach(product => {
    const priceText = product.querySelector('.price').innerText;
    const price = parseFloat(priceText.replace('BGN', '').trim());
    const quantity = parseInt(product.querySelector('.quantity').innerText);
    total += price * quantity;
  });

  document.querySelector('.total-price').innerText = 'Total: BGN ' + total.toFixed(2);
}
calculateTotal();
/*Lily */