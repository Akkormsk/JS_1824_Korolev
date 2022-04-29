// #1


function digits(num) {
    if (!num || num > 999) {
        alert('Input correct number')
        return null
    }
    const res = {'единицы': num %10, 'десятки': Math.floor((num %100)/10), 'сотни': Math.floor(num/100) }
    console.log(res)
}

digits(88)


// #2-3

const cart = []

class Good {
	constructor(name, price, number) {
		this.name = name;
		this.price = price;
        this.number = number;
	}
    makeDiscount(sale) {this.price = this.price*(100-sale)/100}
}

let hood = new Good('hood', 100, 1)
let socks = new Good('socks', 50, 2)
let pants = new Good('pants', 200, 3)

pants.makeDiscount(10)

cart.push(hood, socks, pants)

console.log('total price: ', countBasketPrice(cart))


function countBasketPrice (cart) {
    let sum = 0
    for (let good of cart) {sum += (good.price * good.number)}
    return sum
}