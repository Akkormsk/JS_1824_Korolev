const mainEl = document.querySelector("main")
const headEl = document.querySelector("header")

const products = []
const cart_list = []

let goodId = 1

class Good {
    constructor(name, price, img) {
        this.id = goodId++;
        this.name = name;
        this.price = price;
        this.img = img;
        this.number = 1;
    }
}

// ручное наполнение массива товаров

products.push(
    new Good("Summer brown suit", 3500, "img/1/"),
    new Good("Summer blue suit", 3500, "img/2/"),
    new Good("Summer fem green suit", 2500, "img/3/"),
    new Good("Warm brown suit", 4500, "img/4/"),
    new Good("Warm balck suit", 4500, "img/5/"),
    new Good("Black top", 2500, "img/6/"),
    new Good("Grey hoodie", 2500, "img/7/")
)

// отрисовка карточек 

function drawCard(product) {
    const cardEl = document.createElement("DIV")
    const imgEl = document.createElement("IMG")
    const titleEl = document.createElement("P")
    const priceEl = document.createElement("P")
    const btnEl = document.createElement("BUTTON")

    cardEl.classList.add("product-card")
    imgEl.classList.add("product-card_img")
    imgEl.setAttribute("data-id", product.id)
    titleEl.classList.add("product-card_title")
    priceEl.classList.add("product-card_price")
    btnEl.classList.add("product-card_btn")
    btnEl.setAttribute("data-id", product.id)

    imgEl.setAttribute("src", product.img + "1-min.jpg")
    titleEl.textContent = product.name
    priceEl.textContent = product.price + " " + "RUB"
    btnEl.textContent = "Add to cart"

    mainEl.append(cardEl)
    cardEl.append(imgEl)
    cardEl.append(titleEl)
    cardEl.append(priceEl)
    cardEl.append(btnEl)
}

function drawProducts(products) {
    for (let product of products) {
        drawCard(product)
    }
}

// создание корзины

const cartEl = document.createElement("DIV")
cartEl.classList.add("cart")

function reloadCart() {
    cartEl.textContent = (cart_list.length > 0) ? `В корзине ${countBasketNum(cart_list)} товаров на сумму ${countBasketPrice(cart_list)} рублей` : "Корзина пуста"
}

reloadCart()
headEl.append(cartEl)

// функции корзины

function addToCart(n) {
    n--
    if (cart_list.includes(products[n])) { products[n].number++ }
    else { cart_list.push(products[n]) }
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

drawProducts(products)

// добавление в корзину

mainEl.addEventListener("click", function (e) {

    if (e.target.classList.contains("product-card_btn")) {
        addToCart(e.target.dataset.id)
        reloadCart()
    }
})

// модульное окно

const popEl = document.createElement("DIV")
const imgEl = document.createElement("IMG")
popEl.classList.add("popup")
mainEl.append(popEl)
popEl.append(imgEl)



mainEl.addEventListener("click", function (e) {
    // открыть
    n = e.target.dataset.id
    if (e.target.classList.contains("product-card_img")) {
        popEl.classList.toggle("popup_view")
        imgEl.classList.add("popup_img")
        imgEl.setAttribute("src", "img/" + n + "/1-min.jpg")
        imgEl.setAttribute("data-id", n)
    }
})
// закрыть
popEl.addEventListener("click", function (e) {
    popEl.classList.toggle("popup_view")
    i = 0
})
// сменить
let imgs = ["/1-min.jpg", "/2-min.jpg", "/3-min.jpg"]
i = 0
imgEl.addEventListener("click", function (e) {
    e.stopPropagation()
    i++
    i %= imgs.length
    imgEl.setAttribute("src", "img/" + e.target.dataset.id + imgs[i])
})