let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("تم إضافة المنتج للسلة 🛒");

    updateCartCount();
}


function updateCartCount(){

    let count = document.querySelector(".cart span");

    if(count){
        count.innerHTML = cart.length;
    }

}


updateCartCount();