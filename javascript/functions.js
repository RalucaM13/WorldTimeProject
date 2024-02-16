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
