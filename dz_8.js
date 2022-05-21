// использование замыканий в змейке - можно вести подсчет съеденных яблок для 2 игроков. Вначале в gameInit()
//включаем переключение игроков isPlayer1 = true после окончания игры меняется на false
// далле делаем счетчик-замыкание:

/*
function AppleCounter() {
    let count = 0;
    return function() {
        return count++
    }
}

let player_1_cont = AppleCounter()
let player_2_cont = AppleCounter()

if (snakeHeadPos[0] == applePos[0] && snakeHeadPos[1] == applePos[1]) {
    applePos = [randomInt(0, 9), randomInt(0, 9)];
    newHead.classList.remove('apple');
    getHead(applePos).classList.add('apple');
    if (isPalyer1) {player_1_cont()} else {player_2_cont()}
}
*/

// и в конце выводим значения счетчикв - кто победил

// Задание 2 - объяснение кода

if (!("a" in window)) {
    var a = 1;
}
alert(a);

// на выходе будет undefined так как оператор var определяет переменную в глобальную зону видимости, так что
// проверяемое в if выражение ложно, а значит А не инициализирована

var b = function a(x) {
    x && a(--x);
};
alert(a);

// в данном случае у нас не определение функции, а функциональное выражение, которое не высплывает, а значит не переназначает переменную А, она так и остается undefined

function a(x) {
    return x * 2;
}
var a;
alert(a);

// здесь функция перезаписывает значение переменной (она приоритетнее), но вызывается не колбек а просто тело функции

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

// arguments[2] и А ссылаются на одно и то же значение, значит оно перезаписывается с 3 на 10 и остается 10

function a() {
    alert(this);
}
a.call(null);

// null внутри call выполняет функцию в глобальном окружении, для которого this является window, что и будет выведено