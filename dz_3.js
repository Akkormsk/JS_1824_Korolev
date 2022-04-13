// #1

const arr = Array(100).fill(0)
for (let i = 2; i < arr.length; i++) {
    if (!arr[i]) {
        let j = i * 2
        while (j <= arr.length) {
            arr[j] = 1
            j += i
        }
        console.log(i)
    }
}

// #2-3

const cart = []
const good_1 = {name: 'pants', price: 100, number: 1}
const good_2 = {name: 'hoodie', price: 150, number: 2}
const good_3 = {name: 'socks', price: 50, number: 3}
cart.push(good_1, good_2, good_3)
console.log('total price: ', countBasketPrice(cart))


function countBasketPrice (cart) {
    let sum = 0
    for (let good of cart) {sum += (good.price * good.number)}
    return sum
}

// #4

for(let i = 0; i<=9; console.log(i++)) {}

// #5
console.log('--------------------------')

let x = 'x'
for (let k = 0; k <= 20; k++) {console.log(x.repeat(k))}