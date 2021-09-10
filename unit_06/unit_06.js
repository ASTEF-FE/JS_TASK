//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out1 = ' ';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out1 += '*';
        }
        out1 += '_';
    }
    document.querySelector('.out-1').innerHTML = out1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    let out2 = ' ';
    for (i = 1; i <= 3; i++) {
        out2 += `<br>${i}<br>`;
        for (k = 1; k <= 3; k++) {
            out2 += `*`;
            for (j = 0; j < 1; j++) {
                out2 += `_`;
                // console.log(out2);
            }
        }
    }
    document.querySelector('.out-2').innerHTML = out2;
}
document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    let out3 = ' ';
    for (k = 1; k <= 3; k++) {
        out3 += `<br>`;
        for (j = 0; j < 3; j++) {
            out3 += `*_`;
        }
    }
    document.querySelector('.out-3').innerHTML = out3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
    let out4 = ' ';
    for (let i = 1; i <= 3; i++) {
        out4 += `${i}_`;
        for (let k = 1; k <= 5; k++) {
            out4 += `${k} `;
        }
    }
    document.querySelector('.out-4').innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    let out5 = ' ';
    for (i = 0; i < 3; i++) {
        out5 += `<br>`;
        for (k = 0; k < 3; k++) {
            out5 += `1`;
            for (j = 0; j < 1; j++) {
                out5 += `0`;
                // console.log(j)
            }
        }
    }
    document.querySelector('.out-5').innerHTML = out5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    let out6 = ' ';

    for (i = 0; i < 3; i++) {
        out6 += `<br>`;
        for (k = 1; k <= 6; k++) {
            if (k % 2 == 0 && k <= 4) {
                out6 += `0`;
            } else if (k % 3 == 0) {
                out6 += `x`;
            }
            else {
                out6 += `1`;
            }
        }
    }
    document.querySelector('.out-6').innerHTML = out6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    let out7 = ' ';

    for (i = 0; i < 5; i++) {
        out7 += `<br>`;
        for (k = 0; k < i; k++) {
            out7 += `*`;
        }
    }
    document.querySelector('.out-7').innerHTML = out7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    let out8 = ' ';

    for (i = 4; i >= 0; i--) {
        out8 += `<br>`;
        for (k = 0; k <= i; k++) {
            out8 += `*`
        }
    }
    document.querySelector('.out-8').innerHTML = out8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    let out9 = ' ';

    for (i = 0; i < 7; i++) {
        out9 += `<br>`;
        for (k = 1; k < i; k++) {
            out9 += `${k} `;
        }
    }
    document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let out10 = ' ';

    for (i = 0; i < 5; i++) {
        out10 += `<br>`;

        for (k = 1; k <= 10; k++) {

            if ((i * 10 + k) <= 9) {
                out10 += `0`;
            }
            out10 += `${i * 10 + k} `;
            console.log(out10);
        }
    }
    document.querySelector('.out-10').innerHTML = out10;
}

document.querySelector('.b-10').onclick = t10;

// Задачи на прокачку

// 2Task 1
// Используя вложенные циклы создайте таблицу умножения от 1 до 10. 
// Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. 
// Оформить в виде столбцов где выводятся множители и результат.

function t2_1() {
    let out2_1 = ' ';
    for (i = 1; i <= 10; i++) {
        out2_1 += `<hr>`;
        for (k = 1; k <= 10; k++) {
            out2_1 += `${i}*${k}=${i * k} <br>`;
        }
    }
    document.querySelector('.out2-1').innerHTML = out2_1;
}

document.querySelector('.b2-1').onclick = t2_1;


// 2.Task 2
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// *****
// *****

function t2_2() {
    let out2_2 = ' ';

    for (i = 0; i < 3; i++) {
        for (k = 0; k <= 4; k++) {
            out2_2 += `*`;
        }
        out2_2 += `<br>`;
    }
    document.querySelector('.out2-2').innerHTML = out2_2;
}

document.querySelector('.b2-2').onclick = t2_2;

// 2.Task 3
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// ****
// ***
// *

function t2_3() {
    let out2_3 = ' ';

    for (i = 4; i >= 0; i--) {
        out2_3 += `<br>`;
        for (k = 0; k <= i; k++) {
            out2_3 += `*`;
        }
    }
    document.querySelector('.out2-3').innerHTML = out2_3;
}

document.querySelector('.b2-3').onclick = t2_3;

// 2.Task 4
// С помощью вложенных циклов и символа * нарисуйте:
//    *****
//   *****
//  *****

function t2_4() {
    let out2_4 = '';
    let q = 3;
    let q2 = 7;
    for (i = 0; i < 3; i++) {
        for (k = 0; k < 10; k++) {
            if (k < q || k > q2) {
                out2_4 += `&nbsp;&nbsp;`;
                // out2_4 += `_ `;
            } else {
                out2_4 += `* `;
            }
        }
        q--;
        q2--;
        out2_4 += `<br>`;
    }
    document.querySelector('.out2-4').innerHTML = out2_4;
}

document.querySelector('.b2-4').onclick = t2_4;

// 2. TASK 5
// С помощью вложенных циклов и символа * нарисуйте:
//      *
//      **
//      ***
//      **
//      * 

function t2_5() {
    let out2_5 = ``;
    let q = 0;
    let q2 = 4;
    for (i = 0; i < 5; i++) {
        for (k = 0; k < 5; k++) {
            if (k > q && i != 3) {
                out2_5 += `&nbsp;`;
            } else if (k > q2 && i >= 3) {
                out2_5 += `&nbsp;`;
            } else {
                out2_5 += `*`;
            }
        }
        q++;
        q2--;
        out2_5 += `<br>`;
    }
    document.querySelector('.out2-5').innerHTML = out2_5;
}

document.querySelector('.b2-5').onclick = t2_5;

// 2. TASK 6
// С помощью вложенных циклов и символа * нарисуйте:
//      ******
//      *      *
//      *      *
//      *      *
//      ******

function t2_6() {
    let out2_6 = '';
    let q = 6;
    let q2 = 2;

    for (i = 0; i < 5; i++) {
        for (k = 0; k < 8; k++) {
            if ((k > q && i <= 0) || (i >= 4 && k > q2) || (i >= 1 && i <= 3 && k != 0 && k != 7)) {
                out2_6 += `&nbsp; `;
            }
            else {
                out2_6 += `*`;
            }
        }
        q--;
        q2++;
        out2_6 += `<br>`;
    }
    document.querySelector('.out2-6').innerHTML = out2_6;
}

document.querySelector('.b2-6').onclick = t2_6;

// 2.TASK 7

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//      5 4 3 2 1
//      4 3 2 1
//      3 2 1
//      2 1
//      1

function t2_7() {
    let out2_7 = '';
    let q = 5;
    for (i = 1; i <= 5; i++) {
        out2_7 += `<br>`;
        for (k = q; k > 0; k--) {
            out2_7 += `${k} `;
        }
        q--;
        // out2_7 += `${k}`;
    }
    document.querySelector('.out2-7').innerHTML = out2_7;
}

document.querySelector('.b2-7').onclick = t2_7;

// 2.TASK 8

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//      1
//      2 1
//      3 2 1
//      4 3 2 1
//      5 4 3 2 1

function t2_8() {
    let out2_8 = '';
    let q = 1;
    for (i = 5; i >= 1; i--) {
        for (k = 5; k >= 1; k--) {
            if (k > q) {
                out2_8 += `&nbsp;&nbsp;&nbsp;`;
            } else {
                out2_8 += `${k} `;
            }
        }
        q++;
        out2_8 += `<br>`;
    }
    document.querySelector('.out2-8').innerHTML = out2_8;
}
document.querySelector('.b2-8').onclick = t2_8;

// 2.TASK 9

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//      X X X X 1
//      X X X 2 1
//      X X 3 2 1
//      X 4 3 2 1
//      5 4 3 2 1

function t2_9() {
    let out2_9 = '';
    let q = 1;
    for (i = 5; i >= 1; i--) {
        for (k = 5; k >= 1; k--) {
            if (k > q) {
                out2_9 += `X `;
            } else {
                out2_9 += `${k} `;
            }
        }
        q++;
        out2_9 += `<br>`;
    }
    document.querySelector('.out2-9').innerHTML = out2_9;
}
document.querySelector('.b2-9').onclick = t2_9;

// 2.TASK 10

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//      1
//      2 2
//      3 3 3
//      4 4 4 4
//      5 5 5 5 5

function t2_10() {
    let out2_10 = '';
    let q = 1;
    for (i = 1; i <= 5; i++) {
        out2_10 += `<br>`;
        for (k = 1; k <= i; k++) {
            if (k > q) {
                out2_10 += `&nbsp;`;
            } else {
                out2_10 += `${i} `;
            }
        }
        q++;
    }
    document.querySelector('.out2-10').innerHTML = out2_10;
}

document.querySelector('.b2-10').onclick = t2_10;

// 2.TASK 111

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//      5
//      X X
//      3 3 3
//      X X X X
//      1 1 1 1 1

function t2_11() {
    let out2_11 = '';

    for (i = 5; i >= 1; i--) {
        out2_11 += `<br>`;
        for (k = 5; k >= i; k--) {
            if (i % 2 == 0) {
                out2_11 += `X&nbsp;`;
            } else {
                out2_11 += `${i}&nbsp;&nbsp;`;
            }
        }
    }
    document.querySelector('.out2-11').innerHTML = out2_11;
}

document.querySelector('.b2-11').onclick = t2_11;

// 2.Task 12
// С помощью вложенных циклов и символа * нарисуйте:
//        *****
//       *******
//      *********

function t2_12() {
    let out2_12 = '';
    let q = 3;
    let q2 = 6;
    for (i = 0; i < 3; i++) {
        for (k = 0; k < 12; k++) {
            if (k < q || k > q2) {
                out2_12 += `&nbsp;&nbsp;`;
                // out2_12 += `_ `;
            } else {
                out2_12 += `* `;
            }
        }
        q--;
        q2++;
        out2_12 += `<br>`;
    }
    document.querySelector('.out2-12').innerHTML = out2_12;
}
document.querySelector('.b2-12').onclick = t2_12;

// 2.Task 12
// С помощью вложенных циклов и символа * нарисуйте:
//        *****
//       *******
//      *********















document.write("<div align = \"left\">");
for (i = 0; i <= 10; i++) {
    for (j = 0; j <= i - 1; j++) {
        document.write("*");
    }
    document.write("<br />");
}
document.write("</div>");
/*
Теперь решать как действовать в сторону уменьшения.
Чтобы звездочка сначала выводилась 10 раз, потом 9 и тд.
*/
document.write("<div align = \"left\"> ");
for (i = 0; i <= 10; i++) {
    for (j = 0; j <= i - 1; j++) {
        document.write("*" + " ");
    }
    document.write("<br />");
}
for (i = 8; i >= 0; i--) {
    for (j = i; j >= 0; j--) {
        document.write("*" + " ");
    }
    document.write("<br />");
}
document.write("</div>");



function t2_() {


}

document.querySelector('.b2-').onclick = t2_;