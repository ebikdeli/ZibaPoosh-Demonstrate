import {sendPostData} from './ajax.js';


// * Add to cart
const addToCart = (url=new String, data=new Object, errorMessage=new String) => {
    sendPostData(url, data, errorMessage)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}


export {addToCart}