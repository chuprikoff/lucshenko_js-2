const auth = "auth=7859d9d42a8834141d529577207c9596";
const url = "http://getpost.itgid.info/index2.php";

function objToString(obj) {
  let string = "";
  for (let key in obj) {
    string += `&${key}=${obj[key]}`;
  }
  return string;
}

function request(strBody) {
  let requestData = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}${strBody}`).then((data) => {
      resolve(data.text());
    });
  });
  return requestData;
}

function requestPost(strBody) {
  let requestData = new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `${auth}${strBody}`,
    }).then((data) => {
      resolve(data.text());
    });
  });
  return requestData;
}

function requestPromis(elem, params1, params2, method) {
  let strBody1 = objToString(params1);
  let strBody2 = objToString(params2);

  if (method == "POST") {
    let requestData1 = requestPost(strBody1);
    let requestData2 = requestPost(strBody2);
    Promise.all([requestData1, requestData2]).then((value) => {
      document.querySelector(elem).innerHTML = value;
    });
  } else {
    let requestData1 = request(strBody1);
    let requestData2 = request(strBody2);
    Promise.all([requestData1, requestData2]).then((value) => {
      document.querySelector(elem).innerHTML = value;
    });
  }
}

//////////////////////////////////////////////////////////////////////////////

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
  params1 = {
    action: 1,
  };
  params2 = {
    action: 2,
    name: "Yuriy",
  };
  requestPromis(".out-1", params1, params2);
}
document.querySelector(".b-1").addEventListener("click", t1);

// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
  params1 = {
    action: 3,
    num1: 12,
    num2: 56,
  };
  params2 = {
    action: 4,
    num1: 12,
    num2: 56,
  };
  requestPromis(".out-2", params1, params2);
}

document.querySelector(".b-2").addEventListener("click", t2);

// ваше событие здесь!!!

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
  params1 = {
    action: 5,
  };
  params2 = {
    action: 6,
    num1: 12,
    num2: 56,
  };
  requestPromis(".out-3", params1, params2);
}

document.querySelector(".b-3").addEventListener("click", t3);

// ваше событие здесь!!!

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
  params1 = {
    action: 7,
  };
  params2 = {
    action: 8,
    year: 1974,
  };
  requestPromis(".out-4", params1, params2);
}

document.querySelector(".b-4").addEventListener("click", t4);

// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
  params1 = {
    action: 1,
  };
  params2 = {
    action: 2,
    name: "Yuriy",
  };
  requestPromis(".out-5", params1, params2, "POST");
}

document.querySelector(".b-5").addEventListener("click", t5);

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
  params1 = {
    action: 3,
    num1: 12,
    num2: 56,
  };
  params2 = {
    action: 4,
    num1: 12,
    num2: 56,
  };
  requestPromis(".out-6", params1, params2, "POST");
}

document.querySelector(".b-6").addEventListener("click", t6);

// ваше событие здесь!!!

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
  params1 = {
    action: 5,
  };
  params2 = {
    action: 6,
    num1: 12,
    num2: 56,
  };
  requestPromis(".out-7", params1, params2);
}

document.querySelector(".b-7").addEventListener("click", t7);

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
  params1 = {
    action: 7,
  };
  params2 = {
    action: 8,
    year: 1974,
  };
  requestPromis(".out-8", params1, params2, "POST");
}

document.querySelector(".b-8").addEventListener("click", t8);

// ваше событие здесь!!!
