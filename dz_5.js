// Chess

const $chess = document.querySelector(".chess")
const div1 = document.createElement("div")
div1.className = "chess_block"
$chess.appendChild(div1)
const div2 = document.createElement("div")
div2.className = "chess_letters"
$chess.appendChild(div2)
const $chessBlock = document.querySelector(".chess_block")
const div3 = document.createElement("div")
div3.className = "chess_numbers"
$chessBlock.appendChild(div3)
const div4 = document.createElement("div")
div4.className = "chess_cells"
$chessBlock.appendChild(div4)
const $chessCells = document.querySelector(".chess_cells")
for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        let block = document.createElement("div");
        block.classList.add("cell");
        $chessCells.appendChild(block);
        if (i % 2 != j % 2) {
            block.classList.toggle("black");
        }
    }
}
const $chessLetters = document.querySelector(".chess_letters")
let block1 = document.createElement("div");
block1.classList.add("cell");
$chessLetters.appendChild(block1);
for (let i = 1; i < 9; i++) {
    let block = document.createElement("div");
    block.classList.add("cell");
    block.textContent = String.fromCharCode(96 + i);
    $chessLetters.appendChild(block);
}
const $chessNumbers = document.querySelector(".chess_numbers")
for (let i = 8; i > 0; i--) {
    let block2 = document.createElement("div");
    block2.classList.add("cell");
    block2.textContent = i
    $chessNumbers.appendChild(block2);
}

// Cart

const $cart1 = document.querySelector("#cart1")
const $cart2 = document.querySelector("#cart2")
const cart1_list = []
const cart2_list = []

class Good {
    constructor(name, price, number) {
        this.name = name;
        this.price = price;
        this.number = number;
    }
}
function countBasketNum(cart) {
    let num = 0
    for (let good of cart) { num += good.number }
    return num
}
function countBasketPrice(cart) {
    let sum = 0
    for (let good of cart) { sum += (good.price * good.number) }
    return sum
}

let hood = new Good('hood', 100, 1)
let socks = new Good('socks', 50, 2)
let pants = new Good('pants', 200, 3)

cart1_list.push(hood, socks, pants)


$cart1.textContent = (cart1_list.length > 0) ? `В корзине ${countBasketNum(cart1_list)} товаров на сумму ${countBasketPrice(cart1_list)} рублей` : "Корзина пуста"

$cart2.textContent = (cart2_list.length > 0) ? `В корзине ${countBasketNum(cart2_list)} товаров на сумму ${countBasketPrice(cart2_list)} рублей` : "Корзина пуста"

// Product

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

product_list = []

let shirt = new Product('Рубашка', 100)
let watch = new Product('Часы', 50)
let glasses = new Product('Очки', 200)

product_list.push(shirt, watch, glasses)

const $catalog = document.querySelector("#catalog1")
for (let prod of product_list) {
    let div1 = document.createElement("div")
    div1.classList.add("good")
    $catalog.appendChild(div1)
    let div2 = document.createElement("div")
    div2.classList.add("good_header")
    div2.textContent = prod.name
    div1.appendChild(div2)
    let div3 = document.createElement("div")
    div3.classList.add("good_img")
    div1.appendChild(div3)
    let div4 = document.createElement("div")
    div4.classList.add("good_price")
    div4.textContent = prod.price + ' руб.'
    div1.appendChild(div4)
    let div5 = document.createElement("div")
    div5.classList.add("buybtn")
    div5.textContent = "Купить"
    div1.appendChild(div5)
}