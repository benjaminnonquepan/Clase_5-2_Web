/* =======================================================
   Tiny helper — figures out which day it is today and:
   1) shows/hides the right "today" list on the home page
   2) highlights today's column in the week table
   Nothing here needs editing when you add subjects — you only
   edit the HTML (the schedule itself lives in index.html).
   ======================================================= */

document.addEventListener("DOMContentLoaded", function () {
  var aliases = {
    sunday: ["sunday", "domingo"],
    monday: ["monday", "lunes"],
    tuesday: ["tuesday", "martes"],
    wednesday: ["wednesday", "miercoles"],
    thursday: ["thursday", "jueves"],
    friday: ["friday", "viernes"],
    saturday: ["saturday", "sabado"]
  };

  var englishDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()];
  var spanishDay = aliases[englishDay][1];
  var activeNames = aliases[englishDay].concat([spanishDay]);

  // Show only today's list of classes, hide the rest (home page)
  document.querySelectorAll("[data-today-list]").forEach(function (el) {
    var current = el.getAttribute("data-today-list");
    el.hidden = !activeNames.includes(current);
  });

  // Update the heading with the current day, using the Spanish name
  var label = document.querySelector("[data-today-label]");
  if (label) {
    label.textContent = spanishDay.charAt(0).toUpperCase() + spanishDay.slice(1);
  }

  // Highlight today's column in the week table
  document.querySelectorAll("[data-day]").forEach(function (el) {
    var current = el.getAttribute("data-day");
    if (activeNames.includes(current)) {
      el.classList.add("is-today");
    }
  });
});
