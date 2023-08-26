"use strict";

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      for (var x in data[i]) {
        if (data[i].title == "Work") {
          for (var y in data[i].timeframes) {
            var workdc = data[i].timeframes.daily.current;
            var workdp = data[i].timeframes.daily.previous;
            var workwc = data[i].timeframes.weekly.current;
            var workwp = data[i].timeframes.weekly.previous;
            var workmc = data[i].timeframes.monthly.current;
            var workmp = data[i].timeframes.monthly.previous;
            const wctime = document.getElementById("wctime");
            const wptime = document.getElementById("wptime");
            daily.addEventListener("click", function () {
              wctime.innerHTML = workdc;
              wptime.innerHTML = workdp;
              daily.setAttribute("class", "current");
              weekly.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            weekly.addEventListener("click", function () {
              wctime.innerHTML = workwc;
              wptime.innerHTML = workwp;
              weekly.setAttribute("class", "current");
              daily.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            monthly.addEventListener("click", function () {
              wctime.innerHTML = workmc;
              wptime.innerHTML = workmp;
              monthly.setAttribute("class", "current");
              weekly.removeAttribute("class");
              daily.removeAttribute("class");
            });
          }
        }
        if (data[i].title == "Play") {
          for (var y in data[i].timeframes) {
            var playdc = data[i].timeframes.daily.current;
            var playdp = data[i].timeframes.daily.previous;
            var playwc = data[i].timeframes.weekly.current;
            var playwp = data[i].timeframes.weekly.previous;
            var playmc = data[i].timeframes.monthly.current;
            var playmp = data[i].timeframes.monthly.previous;
            const pctime = document.getElementById("pctime");
            const pptime = document.getElementById("pptime");
            daily.addEventListener("click", function () {
              pctime.innerHTML = playdc;
              pptime.innerHTML = playdp;
              daily.setAttribute("class", "current");
              weekly.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            weekly.addEventListener("click", function () {
              pctime.innerHTML = playwc;
              pptime.innerHTML = playwp;
              weekly.setAttribute("class", "current");
              daily.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            monthly.addEventListener("click", function () {
              pctime.innerHTML = playmc;
              pptime.innerHTML = playmp;
              monthly.setAttribute("class", "current");
              weekly.removeAttribute("class");
              daily.removeAttribute("class");
            });
          }
        }
        if (data[i].title == "Study") {
          for (var y in data[i].timeframes) {
            var studydc = data[i].timeframes.daily.current;
            var studydp = data[i].timeframes.daily.previous;
            var studywc = data[i].timeframes.weekly.current;
            var studywp = data[i].timeframes.weekly.previous;
            var studymc = data[i].timeframes.monthly.current;
            var studymp = data[i].timeframes.monthly.previous;
            const stctime = document.getElementById("stctime");
            const stptime = document.getElementById("stptime");
            daily.addEventListener("click", function () {
              stctime.innerHTML = studydc;
              stptime.innerHTML = studydp;
              daily.setAttribute("class", "current");
              weekly.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            weekly.addEventListener("click", function () {
              stctime.innerHTML = studywc;
              stptime.innerHTML = studywp;
              weekly.setAttribute("class", "current");
              daily.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            monthly.addEventListener("click", function () {
              stctime.innerHTML = studymc;
              stptime.innerHTML = studymp;
              monthly.setAttribute("class", "current");
              weekly.removeAttribute("class");
              daily.removeAttribute("class");
            });
          }
        }
        if (data[i].title == "Exercise") {
          for (var y in data[i].timeframes) {
            var exercisedc = data[i].timeframes.daily.current;
            var exercisedp = data[i].timeframes.daily.previous;
            var exercisewc = data[i].timeframes.weekly.current;
            var exercisewp = data[i].timeframes.weekly.previous;
            var exercisemc = data[i].timeframes.monthly.current;
            var exercisemp = data[i].timeframes.monthly.previous;
            const ectime = document.getElementById("ectime");
            const eptime = document.getElementById("eptime");
            daily.addEventListener("click", function () {
              ectime.innerHTML = exercisedc;
              eptime.innerHTML = exercisedp;
              daily.setAttribute("class", "current");
              weekly.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            weekly.addEventListener("click", function () {
              ectime.innerHTML = exercisewc;
              eptime.innerHTML = exercisewp;
              weekly.setAttribute("class", "current");
              daily.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            monthly.addEventListener("click", function () {
              ectime.innerHTML = exercisemc;
              eptime.innerHTML = exercisemp;
              monthly.setAttribute("class", "current");
              weekly.removeAttribute("class");
              daily.removeAttribute("class");
            });
          }
        }
        if (data[i].title == "Social") {
          for (var y in data[i].timeframes) {
            var socialdc = data[i].timeframes.daily.current;
            var socialdp = data[i].timeframes.daily.previous;
            var socialwc = data[i].timeframes.weekly.current;
            var socialwp = data[i].timeframes.weekly.previous;
            var socialmc = data[i].timeframes.monthly.current;
            var socialmp = data[i].timeframes.monthly.previous;
            const soctime = document.getElementById("soctime");
            const soptime = document.getElementById("soptime");
            daily.addEventListener("click", function () {
              soctime.innerHTML = socialdc;
              soptime.innerHTML = socialdp;
              daily.setAttribute("class", "current");
              weekly.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            weekly.addEventListener("click", function () {
              soctime.innerHTML = socialwc;
              soptime.innerHTML = socialwp;
              weekly.setAttribute("class", "current");
              daily.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            monthly.addEventListener("click", function () {
              soctime.innerHTML = socialmc;
              soptime.innerHTML = socialmp;
              monthly.setAttribute("class", "current");
              weekly.removeAttribute("class");
              daily.removeAttribute("class");
            });
          }
        }
        if (data[i].title == "Self Care") {
          for (var y in data[i].timeframes) {
            var selfcaredc = data[i].timeframes.daily.current;
            var selfcaredp = data[i].timeframes.daily.previous;
            var selfcarewc = data[i].timeframes.weekly.current;
            var selfcarewp = data[i].timeframes.weekly.previous;
            var selfcaremc = data[i].timeframes.monthly.current;
            var selfcaremp = data[i].timeframes.monthly.previous;
            const sectime = document.getElementById("sectime");
            const septime = document.getElementById("septime");
            daily.addEventListener("click", function () {
              sectime.innerHTML = selfcaredc;
              septime.innerHTML = selfcaredp;
              daily.setAttribute("class", "current");
              weekly.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            weekly.addEventListener("click", function () {
              sectime.innerHTML = selfcarewc;
              septime.innerHTML = selfcarewp;
              weekly.setAttribute("class", "current");
              daily.removeAttribute("class");
              monthly.removeAttribute("class");
            });
            monthly.addEventListener("click", function () {
              sectime.innerHTML = selfcaremc;
              septime.innerHTML = selfcaremp;
              monthly.setAttribute("class", "current");
              weekly.removeAttribute("class");
              daily.removeAttribute("class");
            });
          }
        }
      }
    }
  });
