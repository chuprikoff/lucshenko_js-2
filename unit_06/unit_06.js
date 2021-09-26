//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
  let a1 = "";
  for (i = 1; i <= 3; i++) {
    for (k = 1; k <= 3; k++) {
      a1 += "*";
    }
    a1 += "_";
  }
  document.querySelector(".out-1").innerHTML = a1;
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
  let a2 = "";
  for (i = 1; i <= 3; i++) {
    a2 += `${i}<br>`;
    for (k = 1; k <= 3; k++) {
      a2 += `_*`;
    }
    a2 += `<br>`;
  }
  document.querySelector(".out-2").innerHTML = a2;
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
  let a3 = "";
  for (i = 1; i <= 3; i++) {
    for (k = 1; k <= 3; k++) {
      a3 += `*_`;
    }
    a3 += `<br>`;
  }
  document.querySelector(".out-3").innerHTML = a3;
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
  let a4 = "";
  for (i = 1; i <= 3; i++) {
    a4 += `${i}_`;
    for (k = 1; k <= 5; k++) {
      a4 += `${k}*`;
    }
  }
  document.querySelector(".out-4").innerHTML = a4;
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
  let a5 = "";
  for (i = 1; i <= 3; i++) {
    for (k = 1; k <= 6; k++) {
      a5 += +(k % 2 !== 0);
    }
    a5 += `<br>`;
  }
  document.querySelector(".out-5").innerHTML = a5;
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x

function t6() {
  let a6 = "";
  for (l = 1; l <= 3; l++) {
    for (i = 1; i <= 2; i++) {
      for (k = 1; k <= 2; k++) {
        a6 += +(k % 2 !== 0);
      }
      a6 += `x`;
    }
    a6 += `<br>`;
  }
  document.querySelector(".out-6").innerHTML = a6;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
  let a7 = "";
  for (i = 1; i <= 4; i++) {
    for (k = 1; k <= i; k++) {
      a7 += `*`;
    }
    a7 += `<br>`;
  }
  document.querySelector(".out-7").innerHTML = a7;
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
  let a8 = "";
  for (i = 1; i <= 5; i++) {
    for (k = 5; k >= i; k--) {
      a8 += `*`;
    }
    a8 += `<br>`;
  }
  document.querySelector(".out-8").innerHTML = a8;
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
  let a9 = "";
  for (i = 1; i <= 5; i++) {
    for (k = 1; k <= i; k++) {
      a9 += `${k}_`;
    }
    a9 += `<br>`;
  }
  document.querySelector(".out-9").innerHTML = a9;
}

document.querySelector(".b-9").onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

function t10() {
  let a10 = "";
  for (i = 0; i < 5; i++) {
    for (k = 0; k < 11; k++) {
      if (k < 10 && i == 0) {
        a10 += "0" + (10 * i + k) + "_";
      } else {
        a10 += 10 * i + k + "_";
      }
    }
    a10 += `<br>`;
  }
  document.querySelector(".out-10").innerHTML = a10;
}

document.querySelector(".b-10").onclick = t10;
