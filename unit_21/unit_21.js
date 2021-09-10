
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML += ' touch'
}

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count2 = 0;
function t2() {
    document.querySelector('.out-2').innerHTML = count2;
    count2++;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    if (event.target.className == "div-3_1 block") {
        document.querySelector('.out-3').innerHTML = 1;
    } else if (event.target.className == "div-3_2 block") {
        document.querySelector('.out-3').innerHTML = 2;
    }
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);



// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', function () {
        document.querySelector('.out-4').innerHTML += `touch `;
    });
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').addEventListener('touchstart', function () {
        document.querySelector('.out-4').innerHTML = ` `;
    });
    document.querySelector('.out-4').textContent = ``;
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML += ' touchend';
}

document.querySelector('.div-4').addEventListener('touchend', t6);


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.background = 'red';
}

document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8 = ['red', 'green', ' blue', 'orange', 'pink', 'yellow'];
function t8() {
    document.querySelector('.div-8').style.background = a8[Math.floor(Math.random() * a8.length)]
}
document.querySelector('.div-8').addEventListener('touchstart', t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

document.querySelector('.div-9').addEventListener('touchstart', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10(event) {
    let w = event.target.offsetWidth;
    w++;
    event.target.style.width = `${w}px`;
}

document.querySelector('.div-10').addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
    let X = '';
    let Y = '';

    for (const item of e.touches) {
        console.log(item.radiusX);
        console.log(item.radiusY);
        X = item.radiusX;
        Y = item.radiusY;
    }
    document.querySelector('.out-11').innerHTML = `${X} <br> ${Y}`
}

document.querySelector('.div-11').addEventListener('touchstart', t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

// let images = document.querySelectorAll('.img-12-min');
// let bigimg = document.querySelectorAll('.div-12-max')
// let count = 0; // переменная, которая указывает на номер активного изображения в images

// const next = document.querySelectorAll('.next');
// next.onclick = nextFunction;

// const prev = document.querySelectorAll('.prev');
// prev.onclick = prevFunction;

// function nextFunction(e) {
//     if (count == 5) {
//         images[count].classList.remove('active-img')
//         count = -1;
//         images[count + 1].classList.toggle('active-img');
//     } else if (images[count] === undefined) {
//         count = 0;
//     }
//     for (i of images) {
//         document.querySelector('.img-12-max').src = images[count + 1].src
//     }

//     images[count].classList.remove('active-img');
//     count++;
//     images[count].classList.add('active-img');
// }

// function prevFunction(e) {
//     console.log(images);
//     if (count == 0) {
//         images[count].classList.remove('active-img');
//         count = 6;
//         images[count - 1].classList.toggle('active-img');
//     } else if (images[count] === undefined) {
//         count = 5;
//     }
//     for (i of images) {
//         document.querySelector('.img-12-max').src = images[count - 1].src;
//     }
//     images[count].classList.remove('active-img');
//     count--;
//     images[count].classList.add('active-img');

// }

// function resetFunction() {
//     images[count].classList.remove('active-img');
//     count = 0;
//     images[count].classList.add('active-img');
//     for (i of images) {
//         document.querySelector('.img-12-max').src = images[count].src
//     }

// }

// function touchFunction() {
//     for (i of images) {
//         document.querySelector('.img-12-max').src = this.src
//     }

// }

// document.querySelector('.next').onclick = nextFunction;
// document.querySelector('.prev').onclick = prevFunction;
// document.querySelector('.reset').onclick = resetFunction;

// images.forEach(item => {
//     item.addEventListener('touchend', touchFunction);
// });

// **********************************************************************

let images = document.querySelectorAll('.img-12-min');
let bigimg = document.querySelector('.div-12-max img')
let count = 0; // переменная, которая указывает на номер активного изображения в images

function bigP(bigI, eTarget) {
    bigI.src = eTarget.src;
}

function activeImg(imgList, activeImg) {
    console.log(activeImg);
    imgList.forEach(element => {
        element.classList.remove('active-img');
    });
    activeImg.classList.add('active-img');
}

function nextFunction() {
    if (count + 1 == images.length) {
        count = 0;
    } else {
        count++;
    }

    bigP(bigimg, images[count]);
    activeImg(images, images[count]);
}

function prevFunction() {
    if (count - 1 == -1) {
        count = images.length - 1;
    } else {
        count--;
    }
    activeImg(images, images[count]);
    bigP(bigimg, images[count]);
}

function resetFunction() {
    count = 0;
    activeImg(images, images[count]);
    bigP(bigimg, images[count]);
}

function touchFunction(event) {
    activeImg(images, event.target);
    bigP(bigimg, event.target);
    setCount(images, event.target);
}

function setCount(imgList, eTarget) {
    imgList.forEach((element, index) => {
        // console.log(element);
        // console.log('index: ' + index);
        if (eTarget === element) {
            count = index;
            console.log('count=' + index);
        }
    });
}

document.querySelector('.next').onclick = nextFunction;
document.querySelector('.prev').onclick = prevFunction;
document.querySelector('.reset').onclick = resetFunction;
images.forEach(i => {
    i.addEventListener('touchstart', touchFunction)
});
