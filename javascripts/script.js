const FourWeirdBtn = document.querySelector('.FourWeirdBtn');
const FourWeird = document.querySelector('.FourWeird');
const shoppingCart = document.querySelector('.fa-shopping-cart');
const FourErobb = document.querySelector('#cart-clicker');

FourWeirdBtn.addEventListener('mouseover', (() => {
    FourWeird.style.display = 'block';
    FourWeirdBtn.innerText = 'Don\'t even think about it';
}))

FourWeirdBtn.addEventListener('mouseleave', (() => {
    FourWeird.style.display = 'none';
    FourWeirdBtn.innerText = 'Listen Now';
}))

shoppingCart.addEventListener('click', (() => {
    FourErobb.style.display = 'block';
}))