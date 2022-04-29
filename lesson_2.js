// #1

var a = 1, b = 1, c, d;
c = ++a; console.log(c); // префиксный инкремент сначала увеличивает переменную, потом выводит
d = b++; console.log(d); // постфиксный инкремент сначала выводит текущее значение, потом увеличивает
c = (2+ ++a); console.log(c); // сначала инкрементирует а до значения 3 потом складывает с 2
d = (2+ b++); console.log(d); // сначала текущее значение b=2 складывает с 2 (получаем 4) потом увеличивает b
console.log(a); // а на прошлой операции увеличилось до 3
console.log(b); // b на прошлой операции увеличилось до 3

// #2

var a = 2;
var x = 1 + (a *= 2); // судя по всему в js присваивание можно выполнять прямо в выражении. эквивалентно 1 + 2*2

// #3

var a = 0;
var b = -4;
var answer;
if (a >= 0 && b >= 0) {answer = a-b}
else if (a < 0 && b < 0) {answer = a*b}
else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {answer = a+b}
console.log(answer)

// #4

var a = 5;
var res = '';

switch (a) {
    case 1:
        res += '1'
    case 2:
        res += '2'
    case 3:
        res += '3'
    case 4:
        res += '4'
    case 5:
        res += '5'
    case 6:
        res += '6'
    case 7:
        res += '7'
    case 8:
        res += '8'
    case 9:
        res += '9'
    case 10:
        res += '10'
    case 11:
        res += '11'
    case 12:
        res += '12'
    case 13:
        res += '13'
    case 14:
        res += '14'
    case 15:
        res += '15'
        break;
}
console.log(res)

// #5

function plus (x, y) {return (x + y)}
function minus (x, y) {return (x - y)}
function mul (x, y) {return (x * y)}
function del (x, y) {return (x / y)}

console.log(mul(4,5))

// #6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'plus':
            return plus(arg1, arg2)
        case 'minus':
            return minus(arg1, arg2)
        case 'mul':
            return mul(arg1, arg2)
        case 'del':
            return del(arg1, arg2)
    }
}

console.log(mathOperation(6, 2, 'del'))

// #7

console.log( null == 0); // false, так как null по умолчанию равняется только undifined и больше ничему
let n = null;
let n_1 = Number(n);
console.log( n_1 == 0); // после преобразования в число превращается в 0

// #8

function power(val, pow) {
    if (pow == 0) return 1
    return val * power(val, --pow)
}

console.log(power(2,3))