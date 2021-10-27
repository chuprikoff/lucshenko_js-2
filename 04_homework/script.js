const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "b4eff3efe41357fc3c26164c5626da88",
};

function getWeather() {
  const cityId = document.querySelector("#city").value;
  const lang = document.querySelector("#lang").value;
  const units = document.querySelector("#units").value;

  fetch(
    `${param.url}weather?id=${cityId}&units=${units}&lang=${lang}&APPID=${param.appid}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

function showWeather(data) {
  function temp_units() {
    let wind_units_arr = document.querySelectorAll("#wind_units");
    let temp_units_arr = document.querySelectorAll(".temp_unit");
    for (let i = 0; i < temp_units_arr.length; i++) {
      switch (units.value) {
        case "metric":
          wind_units_arr[i].textContent = " м/с";
          temp_units_arr[i].innerHTML = " &#8451;";
          break;
        case "imperial":
          temp_units_arr[i].innerHTML = " &#8457;";
          wind_units_arr[i].textContent = " мил/ч";
          break;
        case "standard":
          wind_units_arr[i].textContent = " м/с";
          temp_units_arr[i].innerHTML = " &#8490;";
          break;
      }
    }
  }
  temp_units();
  function degToCompass(num) {
    const val = Math.floor(num / 45 + 0.5);
    const arr = [
      "северный",
      "северо-восточный",
      "восточный",
      "юго-восточный",
      "южный",
      "юго-западный",
      "западный",
      "северо-западный",
    ];
    return arr[val % 8];
  }
  console.log(data);
  document.querySelector("#name").textContent = data.name;
  document.querySelector("#temp").textContent = data.main.temp;
  document.querySelector("#feels_like").textContent = data.main.feels_like;
  document.querySelector("#description").textContent =
    data.weather[0]["description"];
  document.querySelector(
    ".clouds_icon"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  document.querySelector("#humidity").textContent = data.main.humidity;
  document.querySelector("#pressure").textContent = Math.round(
    data.main.pressure * 0.75
  );
  document.querySelector("#speed").textContent = data.wind.speed;
  document.querySelector("#deg").textContent = degToCompass(data.wind.deg);
  document.querySelector("#gust").textContent = data.wind.gust;
}

document.querySelector(".btn_getWeather").onclick = getWeather;

window.onload = function () {
  let startPos;
  let geoSuccess = function (position) {
    startPos = position;
    let lat = startPos.coords.latitude;
    let lon = startPos.coords.longitude;

    fetch(
      `${param.url}weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&APPID=${param.appid}`
    )
      .then((weather) => {
        return weather.json();
      })
      .then(showWeather);
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};
