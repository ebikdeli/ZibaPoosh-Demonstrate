import { addToCart } from "./function.js";



// *** Get cart quantity from local storage, if there is not any, create it
localStorage.getItem('cart-quantity') ? localStorage.getItem('cart-quantity') : localStorage.setItem('cart-quantity', 0);
document.querySelector('#nav-cart-quantity').innerText = localStorage.getItem('cart-quantity');


// *** Calculate discount percent for each product
const productPrice = document.querySelectorAll('.product-price');

Array.from(productPrice).forEach(elem => {
    let discountPercent = elem.firstElementChild.children[1].innerText;
    const lastPrice = elem.firstElementChild.children[0].innerText;
    const currentPrice = elem.lastElementChild.children[0].innerText;

    discountPercent = ((Number(lastPrice) - Number(currentPrice)) / Number(lastPrice) * 100);
    elem.firstElementChild.children[1].innerText = discountPercent.toFixed(0);
})



// *** Add to cart
const addCart = document.querySelectorAll('.add-to-cart');
// let cartQuantity = Number(document.querySelector('#nav-cart-quantity').innerText);

Array.from(addCart).forEach(elem => {
    elem.addEventListener('click', e => {
        let product_id = e.target.parentNode.getAttribute('data-product-id')
        let data = {quantity: 1, 'product-id':product_id}
        console.log(data);
        let url = '#';
        let errMsg = 'مشکلی در ارسال پیش آمده';
        // Send data to url
        // addToCart(url, data, errMsg)
        Swal.fire(
            'تبریک!',
            'محصول به سبد خرید اضافه شد',
            'success'
          )
        // Update cart-quantity value
        cartQuantity += 1;
        localStorage.setItem('cart-quantity', Number(localStorage.getItem('cart-quantity')) + 1)
        document.querySelector('#nav-cart-quantity').innerText = localStorage.getItem('cart-quantity');
    })
})