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
  console.log(data);
}

document.querySelector(".btn_getWeather").onclick = getWeather;

window.onload = function () {
  let startPos;
  let geoSuccess = function (position) {
    startPos = position;
    let lat = startPos.coords.latitude;
    let lon = startPos.coords.longitude;

    fetch(
      `${param.url}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${param.appid}`
    )
      .then((weather) => {
        return weather.json();
      })
      .then(showWeather);
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};
