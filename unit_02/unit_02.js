// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;
/* let r = document.querySelector('.out-2');
r.innerHTML = c / d; */

document.querySelector('.out-2').textContent = c / d;
// document.querySelector('.out-2').textContent = 

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// document.querySelector('.out-3').textContent = 

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1; // произошла конкатенация

// document.querySelector('.out-4').textContent = 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// document.querySelector('.out-5').textContent = 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// document.querySelector('.out-6').textContent = 

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// document.querySelector('.out-7').textContent = 

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

/*let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.b-8');

button.onclick = function () {
    let inV = inputIn.value;
    console.log(inV);
}*/


function t8() {
    let inV = inputIn.value;
    console.log(inV);
}
let inputIn = document.querySelector('.input-in');
document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

function t9() {
    let inV9 = inputIn9.value;
    // console.log(inV9);

    inputIn9.value = '';
    out9.innerHTML = inV9;

}

let inputIn9 = document.querySelector('.i-9');
document.querySelector('.b-9').onclick = t9;
let out9 = document.querySelector('.out-9');

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

function t10() {
    let inV10 = inputIn10.value;
    // console.log(inV10);
    inputIn10.value = '';
    out10.innerHTML = inV10 * 10;

}

let inputIn10 = document.querySelector('.i-10');
document.querySelector('.b-10').onclick = t10;
let out10 = document.querySelector('.out-10');

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

function t11() {
    let inV11 = +inputIn11.value;
    inputIn11.value = '';
    out11.innerHTML = inV11 + 10;
}
let inputIn11 = document.querySelector('.i-11');
document.querySelector('.b-11').onclick = t11;
let out11 = document.querySelector('.out-11');

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let name = document.querySelector('.i-12_1');
let surName = document.querySelector('.i-12_2');
let out12 = document.querySelector('.out-12');

function t12() {
    let nameValue = name.value;
    let surNameValue = surName.value;
    name.value = '';
    surName.value = '';
    out12.innerHTML = 'Hello ' + nameValue + ' ' + surNameValue;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let firstNumber = document.querySelector('.i-13_1');
let secondNumber = document.querySelector('.i-13_2');
let out13 = document.querySelector('.out-13');
function t13() {
    let firstNumberValue = +firstNumber.value;
    let secondNumberValue = +secondNumber.value;
    firstNumber.Value = '';
    secondNumber.Value = '';

    out13.innerHTML = firstNumberValue + secondNumberValue;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let button = document.querySelector('.b-14');

button.onclick = function () {
    document.querySelector('.i-14').value = 'Hello';
}

// document.querySelector('.i-14').value = 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
document.querySelector('.b-15').onclick = function () {

    y.style.border = '2px solid red';
}


// let y = 
// y.style.border = 

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let firstNum = document.querySelector('.i-16-1');
let secondNum = document.querySelector('.i-16-2');
let out16 = document.querySelector('.out-16');

function t16() {
    let firstNumValue = +firstNum.value;
    let secondNumValue = +secondNum.value;

    firstNum.value = '';
    secondNum.value = '';

    out16.innerHTML = firstNumValue + secondNumValue;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let text = document.querySelector('.i-17');
let out17 = document.querySelector('.out-17');

function t17() {
    let t = text.value;
    text.value = '';
    t = parseInt(t);
    out17.innerHTML = t;
    // console.log(t);
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let text1 = document.querySelector('.i-18');
let out18 = document.querySelector('.out-18');

function t18() {
    let t = text1.value;
    text1.value = '';
    t = parseFloat(t);
    out18.innerHTML = t;
    // console.log(t);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let firstNumber19 = document.querySelector('.i-19-1');
let secondNumber19 = document.querySelector('.i-19-2');
let out19 = document.querySelector('.out-19')

function t19() {
    let firstNumber19Value = firstNumber19.value;
    firstNumber19.value = '';
    firstNumber19 = parseInt(firstNumber19Value);

    let secondNumber19Value = secondNumber19.value;
    secondNumber19.value = '';
    secondNumber19 = parseInt(secondNumber19Value);

    out19.innerHTML = firstNumber19 + secondNumber19;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let name20 = document.querySelector('.name20');
let surName20 = document.querySelector('.surName20');
let age20 = document.querySelector('.age20');
let professional20 = document.querySelector('.professional20');
let out20 = document.querySelector('.out-20');

function t20() {
    let name20Value = name20.value;
    let surName20Value = surName20.value;
    let age20Value = age20.value;
    let professional20Value = professional20.value;

    name20.value = '';
    surName20.value = '';
    age20.value = '';
    professional20.value = '';

    alert('Уважаемый' + ' ' + name20Value + ', ' + surName20Value + ', ' + 'ваш возраст' + ' ' + age20Value + ' ' + 'года,' + ' ' + 'по професси вы' + ' ' + professional20Value);
}

document.querySelector('.b-20').onclick = t20;