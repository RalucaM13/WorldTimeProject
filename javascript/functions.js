function updateMelbTime() {
  let melbElement = document.querySelector("#melb");
  let melbDateElement = melbElement.querySelector(".date");
  let melbTimeElement = melbElement.querySelector(".time");
  let melbTime = moment().tz("Australia/Melbourne");
  melbDateElement.innerHTML = melbTime.format("MMMM Do YYYY");
  melbTimeElement.innerHTML = melbTime.format("h:mm:ss [<small>]A[</small>]");
}

updateMelbTime();
setInterval(updateMelbTime, 1000);

function updateVancTime() {
  let vancElement = document.querySelector("#vanc");
  let vancDateElement = vancElement.querySelector(".date");
  let vancTimeElement = vancElement.querySelector(".time");
  let vancTime = moment().tz("America/Vancouver");
  vancDateElement.innerHTML = vancTime.format("MMMM Do YYYY");
  vancTimeElement.innerHTML = vancTime.format("h:mm:ss [<small>]A[</small>]");
}

updateVancTime();
setInterval(updateVancTime, 1000);

function updateGlasTime() {
  let glasElement = document.querySelector("#glas");
  let glasDateElement = glasElement.querySelector(".date");
  let glasTimeElement = glasElement.querySelector(".time");
  let glasTime = moment().tz("GB");
  glasDateElement.innerHTML = glasTime.format("MMMM Do YYYY");
  glasTimeElement.innerHTML = glasTime.format("h:mm:ss [<small>]A[</small>]");
}

updateGlasTime();
setInterval(updateGlasTime, 1000);

function updateBuchTime() {
  let buchElement = document.querySelector("#buch");
  let buchDateElement = buchElement.querySelector(".date");
  let buchTimeElement = buchElement.querySelector(".time");
  let buchTime = moment().tz("Europe/Bucharest");
  buchDateElement.innerHTML = buchTime.format("MMMM Do YYYY");
  buchTimeElement.innerHTML = buchTime.format("h:mm:ss [<small>]A[</small>]");
}

updateBuchTime();
setInterval(updateBuchTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>

          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small>  
          </div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
