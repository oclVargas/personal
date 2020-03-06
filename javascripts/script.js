const FourWeirdBtn = document.querySelector('.FourWeirdBtn');
const FourWeird = document.querySelector('.FourWeird');
const shoppingCart = document.querySelector('.fa-shopping-cart');
const FourErobb = document.querySelector('#cart-clicker');
const shirtBtn = document.querySelector('.shirt-btn');
const shirtImg = document.querySelector('.old-shirt');
const shirtPrice = document.querySelector('.shirt-price');
const fishPrice = document.querySelector('.fish-price');
const fishBtn = document.querySelector('.fish-button');

shirtBtn.addEventListener('click', (() => {
    shirtImg.src = "./images/beustay.jpg";
}))

fishBtn.addEventListener('click', (() => {
    fishPrice.innerHTML = '';
    const arnold = document.createElement('img');
    arnold.setAttribute('src', './images/emotes/arnoldhalt.png');
    arnold.style.height = "48px";
    fishPrice.appendChild(arnold);
}))

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