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
    new Good("Летний коричневый костюм", 3500, "img/1/"),
    new Good("Летний синий костюм", 3500, "img/2/"),
    new Good("Летний зеленый костюм", 2500, "img/3/"),
    new Good("Зимний коричневый костюм", 4500, "img/4/"),
    new Good("Зимний черный костюм", 4500, "img/5/"),
    new Good("Джемпер черный", 2500, "img/6/"),
    new Good("Толстовка серая", 2500, "img/7/")
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
    cartEl.textContent = (cart_list.length > 0) ? `В корзине ${countBasketNum(cart_list)} поз. на сумму ${countBasketPrice(cart_list)} рублей` : "Корзина пуста"


}

reloadCart()
headEl.append(cartEl)

// функции корзины

function addToCart(n) {
    n--
    if (cart_list.includes(products[n])) { products[n].number++ }
    else { cart_list.push(products[n]) }
}

function delFromCart(n) {
    n--
    if (products[n].number > 1) { products[n].number-- }
    else {
        let index = cart_list.indexOf(products[n])
        cart_list.splice(index, 1)
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

drawProducts(products)

// добавление в корзину
mainEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("product-card_btn")) {
        addToCart(e.target.dataset.id)
        reloadCart()
        drawCartList()
    }
})

// модульное окно картинок

const popEl = document.createElement("DIV")
const imgEl = document.createElement("IMG")
popEl.classList.add("popup")
popEl.classList.toggle("hidden")
imgEl.classList.add("popup_img")
mainEl.append(popEl)
popEl.append(imgEl)

// открыть
mainEl.addEventListener("click", function (e) {
    n = e.target.dataset.id
    if (e.target.classList.contains("product-card_img")) {
        popEl.classList.toggle("hidden")
        imgEl.classList.add("popup_img")
        imgEl.setAttribute("src", "img/" + n + "/1-min.jpg")
        imgEl.setAttribute("data-id", n)
    }
})

// закрыть
popEl.addEventListener("click", function (e) {
    popEl.classList.toggle("hidden")
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


// создание модального окна корзины
const cartPopWrapEl = document.createElement("DIV")
const cartPopEl = document.createElement("DIV")
cartPopEl.classList.add("cart_popup")
cartPopWrapEl.classList.add("cart_popup_wrapper")
cartPopWrapEl.classList.add("hidden")
mainEl.append(cartPopWrapEl)
cartPopWrapEl.append(cartPopEl)

// открыть окно корзины
cartEl.addEventListener("click", (e) => {
    if (cart_list.length > 0) {
        cartPopWrapEl.classList.toggle("hidden")
    }

})

// закрыть окно корзины
cartPopWrapEl.addEventListener("click", (e) => {
    cartPopWrapEl.classList.toggle("hidden")
})

cartPopEl.addEventListener("click", (e) => {
    e.stopPropagation()
})

// отрисовка товара в корзине
function drawCartGood(good, cartWrapper) {
    const cartGoodEl = document.createElement("DIV")
    const cartGoodImgEl = document.createElement("IMG")
    const cartGoodTextEl = document.createElement("DIV")
    const cartGoodTitleEl = document.createElement("P")
    const cartGoodPriceEl = document.createElement("P")

    const cartGoodNumEl = document.createElement("DIV")
    const cartGoodNumMinusEl = document.createElement("IMG")
    const cartGoodNumPlusEl = document.createElement("IMG")
    const cartGoodTotalEl = document.createElement("P")

    const cartGoodSumEl = document.createElement("DIV")
    const cartGoodSumTextEl = document.createElement("P")
    const cartGoodSumPriceEl = document.createElement("P")

    cartGoodEl.classList.add("cart_good")
    cartGoodImgEl.classList.add("cart_good_img")
    cartGoodTextEl.classList.add("cart_good_text")
    cartGoodTitleEl.classList.add("cart_good_title")
    cartGoodPriceEl.classList.add("cart_good_price")

    cartGoodNumEl.classList.add("cart_good_num")
    cartGoodNumMinusEl.classList.add("cart_icon")
    cartGoodNumPlusEl.classList.add("cart_icon")
    cartGoodTotalEl.classList.add("cart_good_num_text")

    cartGoodSumEl.classList.add("cart_sum_text")
    cartGoodSumTextEl.classList.add("cart_sum_title")
    cartGoodSumPriceEl.classList.add("cart_sum_price")

    cartPopEl.append(cartWrapper)
    cartWrapper.append(cartGoodEl)
    cartGoodEl.append(cartGoodImgEl)
    cartGoodEl.append(cartGoodTextEl)
    cartGoodTextEl.append(cartGoodTitleEl)
    cartGoodTextEl.append(cartGoodPriceEl)

    cartGoodEl.append(cartGoodNumEl)
    cartGoodNumEl.append(cartGoodNumMinusEl)
    cartGoodNumEl.append(cartGoodTotalEl)
    cartGoodNumEl.append(cartGoodNumPlusEl)

    cartGoodEl.append(cartGoodSumEl)
    cartGoodSumEl.append(cartGoodSumTextEl)
    cartGoodSumEl.append(cartGoodSumPriceEl)


    cartGoodImgEl.setAttribute("src", "img/" + good.id + "/1-min.jpg")
    cartGoodTitleEl.textContent = good.name
    cartGoodPriceEl.textContent = good.price + " RUB"
    cartGoodNumMinusEl.setAttribute("src", "img/minus.svg")
    cartGoodTotalEl.textContent = good.number
    cartGoodNumPlusEl.setAttribute("src", "img/plus.svg")

    cartGoodSumTextEl.textContent = "Сумма:"
    cartGoodSumPriceEl.textContent = good.price * good.number + " RUB"

    //функция прибавления количества
    cartGoodNumPlusEl.addEventListener("click", (e) => {
        addToCart(good.id)
        reloadCart()
        drawCartList()
    })

    //функция убавления количества
    cartGoodNumMinusEl.addEventListener("click", (e) => {
        delFromCart(good.id)
        reloadCart()
        drawCartList()
    })
}

// отрисовка страницы корзины
function drawCartList() {
    cartPopEl.innerHTML = ''

    // отрисовка блока с товарами
    const cartWrapper = document.createElement("DIV")
    cartWrapper.classList.add("cart-wrapper")
    for (let good of cart_list) {
        drawCartGood(good, cartWrapper)
    }
    const cartSumEl = document.createElement("DIV")
    cartSumEl.classList.add("cart_sum")
    cartWrapper.append(cartSumEl)
    cartSumEl.textContent = (cart_list.length > 0) ? `Сумма корзины: ${countBasketPrice(cart_list)} RUB` : "Корзина пуста"
    const cartButEl = document.createElement("BUTTON")
    cartButEl.classList.add("cart-button")
    cartButEl.textContent = "Далее"
    cartWrapper.append(cartButEl)

    cartButEl.addEventListener("click", (e) => {
        adressWrapper.classList.toggle("hidden")
        cartWrapper.classList.toggle("hidden")
    })

    // отрисовка блока адрес
    const adressWrapper = document.createElement("DIV")
    adressWrapper.classList.add("adress-wrapper")
    adressWrapper.classList.toggle("hidden")
    cartPopEl.append(adressWrapper)

    const adressFormEl = document.createElement("FORM")
    adressFormEl.classList.add("adress-form")
    adressFormEl.innerHTML = '<textarea placeholder="Введите адрес доставки"></textarea>'
    adressWrapper.append(adressFormEl)

    const adressButEl = document.createElement("BUTTON")
    adressButEl.classList.add("cart-button")
    adressButEl.textContent = "Далее"
    adressWrapper.append(adressButEl)

    adressButEl.addEventListener("click", (e) => {
        adressWrapper.classList.toggle("hidden")
        commentWrapper.classList.toggle("hidden")
    })

    // отрисовка блока комментарий
    const commentWrapper = document.createElement("DIV")
    commentWrapper.classList.add("comment-wrapper")
    commentWrapper.classList.toggle("hidden")
    cartPopEl.append(commentWrapper)

    const commentFormEl = document.createElement("FORM")
    commentFormEl.classList.add("adress-form")
    commentFormEl.innerHTML = '<textarea placeholder="Комментарий для курьера"></textarea>'
    commentWrapper.append(commentFormEl)

    const commentButEl = document.createElement("BUTTON")
    commentButEl.classList.add("cart-button")
    commentButEl.textContent = "Завершить"
    commentWrapper.append(commentButEl)

    commentButEl.addEventListener("click", (e) => {
        cartPopWrapEl.classList.toggle("hidden")
    })
}