import { addToCart } from "./function.js";



// *** Get cart quantity from local storage, if there is not any, create it
localStorage.getItem('cart-quantity') ? localStorage.getItem('cart-quantity') : localStorage.setItem('cart-quantity', 0);
document.querySelector('#nav-cart-quantity').innerText = localStorage.getItem('cart-quantity');



// *** Calculate discount percent
const priceBefore = Number(document.querySelector('.price-before-value').innerText);
const priceCurrent = Number(document.querySelector('.price-after-value').innerText);
const discountPercent = ((priceBefore - priceCurrent) / priceBefore) * 100;
document.querySelector('.discount-value').innerText = discountPercent.toFixed(0);



// *** Add to Cart index
const addCart = document.querySelector('.add-to-cart-box');
// let cartQuantity = Number(document.querySelector('#nav-cart-quantity').innerText);

addCart.addEventListener('click', e => {
    const productId = document.querySelector('.name').getAttribute('data-product-id');
    const quantity = 1;
    let data = {'product-id': productId, quantity: quantity};
    // console.log(data);
    let url = '#';
    let errorMSG = 'ارتباط با سرور برقرار نشد';
    // Send data to url
    // addToCart(url, data, errMsg)
    Swal.fire(
        'تبریک!',
        'محصول به سبد خرید اضافه شد',
        'success'
      )
    // Update cart-quantity value
    localStorage.setItem('cart-quantity', Number(localStorage.getItem('cart-quantity')) + 1)
    // cartQuantity += 1;
    // document.querySelector('#nav-cart-quantity').innerText = cartQuantity;
    document.querySelector('#nav-cart-quantity').innerText = localStorage.getItem('cart-quantity');
})