// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let input1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');

function f1() {
    let num = +input1.value;
    if (num == 4) {
        out1.innerHTML = true;
    } else {
        out1.innerHTML = false;
    }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 35;
let out2 = document.querySelector('.out-2');

function f2() {
    if (a21 > a22) {
        out2.innerHTML = a21;
    } else {
        out2.innerHTML = a22;
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let firstNum3 = document.querySelector('.i-31');
let secondNum3 = document.querySelector('.i-32');
let out3 = document.querySelector('.out-3');

function f3() {
    let fNum3 = +firstNum3.value;
    let sNum3 = +secondNum3.value;

    if (fNum3 > sNum3) {
        out3.innerHTML = fNum3;
    } else {
        out3.innerHTML = sNum3;
    }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let year = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');
function f4() {

    let year4 = +year.value;
    let thisYear = 2021;
    let age = thisYear - year4;

    if (age >= 18) {
        out4.innerHTML = 1;
    } else {
        out4.innerHTML = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let input5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');

function f5() {
    let in5 = +input5.value;

    if (in5 < 0) {
        out5.innerHTML = 'm';
    } else if (in5 == 0) {
        out5.innerHTML = 0;
    } else if (in5 >= 1) {
        out5.innerHTML = 1;
    }

}

document.querySelector('.b-5').onclick = f5;

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let input6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

function f6() {
    let in6 = +input6.value;
    if (in6 % 2 == 0) {
        out6.innerHTML = 'evven';
    } else {
        out6.innerHTML = 'odd'
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let firstNumber7 = document.querySelector('.i-71');
let secondNumber7 = document.querySelector('.i-72');
let out7 = document.querySelector('.out-7');

function f7() {
    let firstNum7 = +firstNumber7.value;
    let secondNum7 = +secondNumber7.value;

    out7.innerHTML = Math.pow(firstNum7, secondNum7);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let select8 = document.querySelector('.s-8');
let out8 = document.querySelector('.out-8');

function f8() {
    let s8 = +select8.value;

    switch (s8) {
        case 1:
            out8.innerHTML = 'one';
            break;
        case 2:
            out8.innerHTML = 'two';
            break;
        case 3:
            out8.innerHTML = 'three';
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let input9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');

function f9() {
    let in9 = +input9.value;

    switch (true) {
        case in9 >= 1 && in9 <= 32:
            out9.innerHTML = 1;
            break;

        case in9 >= 33 && in9 <= 43:
            out9.innerHTML = 2;
            break;

        case in9 >= 44 && in9 <= 64:
            out9.innerHTML = 3;
            break;
        default:
            out9.innerHTML = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let select100 = document.querySelector('.s-100');
let out10 = document.querySelector('.out-10');

function f10() {
    let s100 = +select100.value;

    switch (s100) {
        case 6:
            out10.innerHTML = select100.value;
            break;

        case 7:
            out10.innerHTML = select100.value;
            break;

        case 11:
            out10.innerHTML = select100.value;
            break;

        case 9:
            out10.innerHTML = select100.value;
            break;
    }
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let select110 = document.querySelector('.s-110');
let out11 = document.querySelector('.out-11');

function f11() {
    let s110 = +select110.value;

    switch (s110) {
        case 6:
            out11.innerHTML = select110.value;
            break;

        case 7:
            out11.innerHTML = select110.value;
            break;

        case 11:
            out11.innerHTML = select110.value;
            break;

        case 9:
            out11.innerHTML = select110.value;
            break;
    }
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');
let out12 = document.querySelector('.out-12');

function f12() {
    let v = i120.value;
    out12.innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let i130 = document.querySelector('.i-130');
let out13 = document.querySelector('.out-13');

function f13() {
    let i13 = i130.value;
    out13.innerHTML = (typeof i13);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let input141 = document.querySelector('.i-141');
let input142 = document.querySelector('.i-142');
let select143 = document.querySelector('.s-143');
let out14 = document.querySelector('.out-14');

function f14() {
    let in141 = +input141.value;
    let in142 = +input142.value;
    let sel143 = select143.value;

    switch (sel143) {
        case '+':
            out14.innerHTML = in141 + in142;
            break;

        case '-':
            out14.innerHTML = in141 - in142;
            break;

        case '*':
            out14.innerHTML = in141 * in142;
            break;
        case '/':
            out14.innerHTML = in141 / in142;
            break;
    }
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let select151 = document.querySelector('.s-151');
let select152 = document.querySelector('.s-152');
let select153 = document.querySelector('.s-153');
let out15 = document.querySelector('.out-15');

function f15() {
    let sel151 = +select151.value;
    let sel152 = +select152.value;
    let sel153 = select153.value;

    switch (sel153) {
        case '&&':
            out15.innerHTML = sel151 && sel152;
            break;
        case '||':
            out15.innerHTML = sel151 || sel152;
            break;

    }
}

document.querySelector('.b-15').onclick = f15;



