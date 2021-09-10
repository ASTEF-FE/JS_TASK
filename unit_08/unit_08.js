//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
    let out1 = '';
    let i1 = 1;

    while (i1 <= 50) {
        out1 += `${i1} `;
        i1++;
    }
    document.querySelector('.out-1').innerHTML = out1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.
let out2 = '';
let i2 = 2;
function t2() {
    while (i2 <= 122) {
        if (i2 % 2 == 0) {
            out2 += `${i2} `;
        }
        i2++;
    }
    document.querySelector('.out-2').innerHTML = out2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.
let out3 = '';
let i3 = 25;
function t3() {
    while (i3 >= 7) {
        out3 += `${i3} `;
        i3--;
    }
    document.querySelector('.out-3').innerHTML = out3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

let out4 = '';
let i4 = 77;

function t4() {
    while (i4 >= 35) {
        out4 += `${i4}_`;
        i4 -= 3;
        // console.log(i4);
    }
    document.querySelector('.out-4').innerHTML = out4;

}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let out5 = '';
let i5 = 1;

function t5() {
    while (i5 <= 17) {
        if (i5 % 2 == 0) {
            out5 += `${i5}_**`;
        } else {
            out5 += `${i5}_*`
        }
        i5++;
    }
    document.querySelector('.out-5').innerHTML = out5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

let out6 = '';
let i6 = 0;
let i61 = document.querySelector('.i-6');


function t6() {
    while (i6 < i61.value) {
        let i62 = 0;
        while (i62 < 6) {
            out6 += `*`;
            i62++;
        }
        out6 += `<br>`;
        i6++;
    }
    document.querySelector('.out-6').innerHTML = out6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.


let i71 = document.querySelector('.i-7');

function t7() {
    let out7 = '';
    let i7 = i71.value;
    while (i7 >= 0) {

        out7 += `${i7} `;

        console.log(i7);
        i7--;
    }
    document.querySelector('.out-7').innerHTML = out7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

// let out8 = '';
let i81 = document.querySelector('.i-81');
let i82 = document.querySelector('.i-82');

function t8() {
    let out8 = '';
    let i811 = i81.value;
    let i822 = i82.value;


    while (i822 >= i811) {
        out8 += `${i811} `;
        i811++;
    }

    document.querySelector('.out-8').innerHTML = out8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

let i91 = document.querySelector('.i-91');
let i92 = document.querySelector('.i-92');

function t9() {
    let out9 = '';

    let i911 = i91.value;
    let i922 = i92.value;

    if (i911 < i922) {
        while (i911 <= i922) {
            out9 += `${i911} `;
            i911++;
        }
    } else {
        while (i922 <= i911) {
            out9 += `${i922} `;
            i922++;
        }
    }
    document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

let out10 = '';
let i10 = 1950;

function t10() {
    while (i10 <= 2000) {
        out10 += `${i10} `;
        i10 += 2;
    }
    document.querySelector('.out-10').innerHTML = out10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


let div11 = document.querySelectorAll('.div-11');
console.log(div11);

function t11() {
    let out11 = '';

    let i11 = 0;
    while (i11 < div11.length) {
        out11 += `${div11[i11].innerHTML} `;
        i11++;
    }
    document.querySelector('.out-11').innerHTML = out11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let div12 = document.querySelectorAll('.div-12');

function t12() {
    let i12 = 0;
    while (i12 <= div12.length) {
        div12[i12].style.background = 'orange';
        i12++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

let inp13 = document.querySelectorAll('.i-13');

function t13() {
    let i13 = 0;

    while (i13 < inp13.length) {
        inp13[i13].value = `${i13 + 1}`;
        i13++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let r14 = document.querySelectorAll('.i-14');

function t14() {
    let out14 = '';
    let i14 = 0;
    while (i14 < r14.length) {
        if (r14[i14].checked) {
            out14 += r14[i14].value;
        }
        i14++;
    }
    document.querySelector('.out-14').innerHTML = out14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15() {
    let out15 = '';
    let i15 = 0;

    while (i15 <= 10) {
        out15 += ` ${10 - i15} ${i15}`;
        i15++;
    }
    document.querySelector('.out-15').innerHTML = out15;
}

document.querySelector('.b-15').onclick = t15;
