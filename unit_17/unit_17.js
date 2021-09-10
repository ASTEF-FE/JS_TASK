// для решения задач используйте эти переменные
let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    b5_res = [],
    b6_res = [],
    b7_res = [],
    b8_res = [],
    b9_num = [],
    b9_string = [],
    b10_res;

// Task 1 ============================================
/* Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Возвратите массив  a1_res. */

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
    a1_res = a1.map(elem => {
        return elem * 2;
    });
    return a1_res;
}

document.querySelector('.b-1').onclick = () => {
    console.log(t1());
}

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.*/

let a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {
    a2_res = a2.map(item => Math.pow(item, 2));
    return a2_res;
}

document.querySelector('.b-2').onclick = () => {
    console.log(t2());
}


// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a3_res куда добавьте все элементы приведенные к числу. Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t3() {
    a3_res = a3.map((item) => (parseInt(item)));
    return a3_res;
}

document.querySelector('.b-3').onclick = () => {
    console.log(t3());
}


// Task 4 ============================================
/*  Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map. Дан массив a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a4_res куда добавьте ТОЛЬКО числа из массива a4. Возвратите a4_res. Действия должны запускаться при вызове функции t4. */

let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t4() {
    a4_res = a4.map((item) => {
        if ((typeof (item) == 'number')) {
            return item;
        }
    });
    return a4_res;
}

document.querySelector('.b-4').onclick = () => {
    console.log(t4());
}



// Task 5 ============================================
/*  Дан массив b5 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте b5_res, который содержит только четные числа из b5. Возвратите b5_res. Действия должны запускаться при вызове функции t5. */

let b5 = [3, 14, 15, 92];

function t5() {
    b5_res = b5.filter(item => {
        if (item % 2 == 0) {
            return true;
        }
    });
    return b5_res;
}

document.querySelector('.b-5').onclick = () => {
    console.log(t5());
}



// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте массив b6_res, который содержит только числа из b6. Возвратите b6_res. Действия должны запускаться при вызове функции t6. */

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
    b6_res = b6.filter(item => {
        if (typeof item == 'number') {
            return true;
        }
    });
    return b6_res;
}

document.querySelector('.b-6').onclick = () => {
    console.log(t6());
}


// Task 7 ============================================
/*  Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. C помощью filter переберите массив b7 и создайте  b7_res, который содержит только строки из b7, длина которых больше 3. Возвратите b7_res. Действия должны запускаться при вызове функции t7. */

let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

function t7() {
    b7_res = b7.filter(item => {
        if (typeof item == 'string' && item.length > 3) {
            return true
        }
    });
    return b7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
}

// Task 8 ============================================
/* Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. С помощью filter, переберите массив b8 и создайте массив b8_res, который содержит индексы четных элементов. Возвратите b8_res. Действия должны запускаться при вызове функции t8 */

let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t8() {
    b8_res = b8.filter((item, index) => {
        if (index % 2 == 0) {
            return true;
        }
    });
    return b8_res;
}

document.querySelector('.b-8').onclick = () => {
    console.log(t8());
}



// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b9 и создайте массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решите с помощью filter. Действия должны запускаться при вызове функции t9. */

let b9 = [3, "hello", 4, "world", 5, "hi"];

function t9() {
    let b9_ns = [];
    b9_ns = b9.filter(item => {
        if (typeof item == 'number') {
            b9_num.push(item);
        } else if (typeof item == 'string') {
            b9_string.push(item);
        }
    });
    return [b9_num, b9_string];

    //2 способ (1 кручея)
    // b9_num = b9.filter(item => {
    //     if (typeof item == 'number') {
    //         return true;
    //     }
    // });
    // b9_string = b9.filter(item => {
    //     if (typeof item == 'string') {
    //         return true;
    //     }
    // });
    // return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
}



// Task 10 ============================================
/*  Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter переберите массив и создайте  b10_res, в который входят вложенные массивы содержащие цифру 3.  Возвратите b10_res. Действия должны запускаться при вызове функции t10. */

let b10 = [[1, 2, 3], [3, 4, 6], [4, 5, 7], [8, 9, 3]]

function t10() {
    // 1 Способ
    // b10_res = b10.filter(item => {
    //     if (filter2(item)) {
    //         return true;
    //     }
    // });

    // function filter2(item) {
    //     for (let k of item) {
    //         if (k == 3) {
    //             return true;
    //         }
    //     }
    // }

    // 2 способ (Намного проще, ибо я затупил и сразу не додумался,
    // в 1 способе сам себе усложнил жизнь)
    b10_res = b10.filter(item => {
        for (let k of item) {
            if (k == 3) {
                return true;
            }
        }
    });
    return b10_res;
}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}

// P.S. Вы же точно использовали переменные в начале файла? Не меняли область видимости?


// Код из MDN (просто для себя, понять принцип работы)
// var arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
// ];

// var invalidEntries = 0;

// function isNumber(obj) { //obj = 15 ...
//     return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
// }

// function filterByID(item) { //item = { id: 15 } ...
//     if (isNumber(item.id) && item.id !== 0) {
//         return true;
//     }
//     invalidEntries++;
//     return false;
// }

// var arrByID = arr.filter(filterByID);

// console.log('Отфильтрованный массив\n', arrByID);
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log('Количество ошибочных записей = ', invalidEntries);
// // Number of Invalid Entries = 5

