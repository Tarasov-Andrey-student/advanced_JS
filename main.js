'use strict';

let str = '';

const goods = [
    {img: 'img/Layer2.jpg', title: 'Mango People T-shirt', price: 52, quantity: 1, id: 0},
    {img: 'img/Layer3.jpg', title: 'Mango People T-shirt', price: 62, quantity: 1, id: 1},
    {img: 'img/Layer4.jpg', title: 'Mango People T-shirt', price:72, quantity: 1, id: 2},
    {img: 'img/Layer5.jpg', title: 'Mango People T-shirt', price: 82, quantity: 1, id: 3},
    {img: 'img/Layer6.jpg', title: 'Mango People T-shirt', price: 92, quantity: 1, id: 4},
    {img: 'img/Layer7.jpg', title: 'Mango People T-shirt', price: 192, quantity: 1, id: 5},
    {img: 'img/Layer8.jpg', title: 'Mango People T-shirt', price: 152, quantity: 1, id: 6},
    {img: 'img/Layer9.jpg', title: 'Mango People T-shirt', price: 252, quantity: 1, id: 7}
];

function addItem(items) {
    let str = '';
    items.map(element => {
        str += `
                <div class="item">
                    <img class="item_foto" src="${element.img}" alt="foto">
                    <p class="id" hidden>${element.id}</p>
                    <h3 class="item_head">${element.title}</h3>
                    <p class="item_price">$ ${element.price}.00</p>
                    <button class="item_buy">Купить</button>
                </div>
                `
    });
    document.getElementById('catalog').innerHTML = str;
}

addItem(goods);

let basket = document.querySelector('#basket');
basket.style.display = 'none';
let strBasket = '';
let sum = 0;

function getBasket(id) {
    let itemBasket = goods[id];
    sum += itemBasket.price;
    strBasket += `
                        <div class="item-basket">
                            <img class="basket_foto" src="${itemBasket.img}" alt="foto">
                            <div class="item-text">
                            <p class="id_basket" hidden>${itemBasket.id}</p>
                            <h3 class="basket_head">${itemBasket.title}</h3>
                            <p class="basket_quantity">Количество товара ${itemBasket.quantity}</p>
                            <p class="basket_price">$ ${itemBasket.price}.00</p>
                            <button class="del_item">Удалить</button>
                            </div>
                        </div>
                        `
}

let buys = document.querySelectorAll('.item_buy');
buys.forEach(function(buy) {
    buy.addEventListener('click', () => {
        let id = +buy.parentNode.querySelector('.id').innerHTML;
        getBasket(id);
        basket.innerHTML = strBasket;
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'score');
        divEl.innerHTML = `<p class="score_text">Стоимость товаров в корзине $ ${sum}</p>`;
        let buyAll = document.createElement('button');
        buyAll.setAttribute('class', 'buyAll');
        buyAll.innerHTML = `Купить`;
        let delAll = document.createElement('button');
        delAll.setAttribute('class', 'delAll');
        delAll.innerHTML = `Очистить`;
        
        basket.append(divEl);
        divEl.append(buyAll);
        divEl.append(delAll);
        let delAllEl = document.querySelector('.delAll');
        delAllEl.addEventListener('click', () => {
            sum = 0;
            strBasket = '';
            basket.innerHTML = '<div class="null_cart">Корзина пустая</div>';
        });
    })
});

let cartEl = document.querySelector('#cart_button');
cartEl.addEventListener('click', () => {
    if (basket.style.display === 'none') {
        basket.style.display = 'flex';
    } else {
        basket.style.display = 'none';
    };
});




// function renderGoodsItem({title, price, img}) {
//     return `
//             <div class="item">
//                 <img class="item_foto" src="${img}" alt="foto">
//                 <h3 class="item_head">${title}</h3>
//                 <p class="item_price">$ ${price}.00</p>
//                 <button class="item_buy">Купить</button>
//             </div>
//             `       
// };

// // const renderItems = items => items.map(renderGoodsItem); //сокращенная форма записи прохода массива goods

// const renderItems = (items) => {
//      const res = items.map(item => renderGoodsItem(item));
//      return res
// }// не сокращенная запись прохода массива goods

// document.getElementById('catalog').innerHTML = renderItems(goods).join('');


