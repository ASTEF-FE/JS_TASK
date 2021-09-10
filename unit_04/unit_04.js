// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

let numTask = 1;

function f1() {
    alert(numTask);
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f2() {
    alert('2');
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
    alert('3');
}

document.querySelector('.p-3').onclick = f3;


// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4



let out4 = document.querySelector('.out-4');

function f4() {
    let checkbox4 = document.querySelector('.i-4');

    if (checkbox4.checked) {
        out4.innerHTML = (true)
    } else {
        out4.innerHTML = (false)
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

let checkbox5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');

function f5() {
    if (checkbox5.checked) {
        out5.innerHTML = (checkbox5.value)
    } else {
        out5.innerHTML = (false)
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6


let checkbox6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

function f6() {
    out6.innerHTML = (checkbox6.value);
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

let pass7 = document.querySelector('.i-7');
let out71 = document.querySelector('.out-71');
let out72 = document.querySelector('.out-72');

function f7() {
    out71.innerHTML = (pass7.value);

    if (pass7.value.length >= 6) {
        out72.innerHTML = (1);
    } else {
        out72.innerHTML = (0);
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

let out8 = document.querySelector('.out-8');

function f8() {
    out8.innerHTML = '<input type="text" class="i-81"></div> <button class="b-81">Task-81</button>';

    // кнопку создаем через ....innerHTML = '<button....</button>
    // т.е. как строку и в ставляем на страницу
    //  потом получаем кнопку со страницы и вешаем событие
    //    вашасозданнаякнопка.onclick = f81;
    //
    document.querySelector('.b-81').onclick = f81;

}

let out81 = document.querySelector('.out-81');

function f81() {

    let t = document.querySelector('.i-81');

    out81.innerHTML = (t.value);
}

document.querySelector('.b-8').onclick = f8;



// Task 9
//Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен. 

let r9 = document.querySelector('.r-9');

function f9() {
    if (r9.checked) {
        document.querySelector('.out-9').innerHTML = (r9.value);
    } else {
        document.querySelector('.out-9').innerHTML = (0);
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

let i10 = document.querySelector('.i-10');
let out10 = document.querySelector('.out-10');

function f10() {
    out10.style.background = i10.value;
}

document.querySelector('.b-10').onclick = f10;


// Task     11
//   Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

let i111 = document.querySelector('.i-111');
let i112 = document.querySelector('.i-112');

function f11() {
    let col = i111.value;
    i111.value = i112.value;
    i112.value = col;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в  out-12 выбранную в input дату.

let i12 = document.querySelector('.i-12');
let out12 = document.querySelector('.out-12');

function f12() {
    out12.innerHTML = (i12.value);
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

let i13 = document.querySelector('.i-13');
let out13 = document.querySelector('.out-13');

function f13() {
    out13.innerHTML = (i13.value);
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

let t14 = document.querySelector('.t-14');
let out14 = document.querySelector('.out-14');

function f14() {
    out14.innerHTML = (t14.value);
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

let t15 = document.querySelector('.t-15');
let i15 = document.querySelector('.i-15');
let out15 = document.querySelector('.out-15');

function f15() {
    out15.innerHTML = (i15.value);
    t15.value = i15.value;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

let s16 = document.querySelector('.s-16');
let out16 = document.querySelector('.out-16');

function f16() {
    // для получения выбранного option просто получите select в переменную и select.value;
    out16.innerHTML = (s16.value);
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

let s17 = document.querySelector('.s-17');
let out17 = document.querySelector('.out-17');

function f17() {
    out17.innerHTML = (s17.value);
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.
let s18 = document.querySelector('.s-18');
let i18 = document.querySelector('.i-18');

function f18() {
    i18.value = s18.value;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

let i191 = document.querySelector('.i-191');
let i192 = document.querySelector('.i-192');
let out19 = document.querySelector('.out-19');

function f19() {
    out19.innerHTML = (i191.value + ' ' + i192.value);
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!

function f20(e) {
    e.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    console.log(form.elements);
    console.log(form.elements['username'].value); // так можно обратиться к элементу внутри формы
    console.log(form.elements['password'].value);

    let text = form.elements['username'].value;
    let pas = form.elements['password'].value;
    let out20 = document.querySelector('.out-20');

    out20.innerHTML = (text + ' ' + pas);

}

document.querySelector('.b-20').onclick = f20;