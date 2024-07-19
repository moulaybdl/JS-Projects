var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var pm_am = document.getElementById("pm-am");

function pm_or_am(hour) {
  return hour >= 12 ? "PM" : "AM";
}

function format_time(num) {
  return num >= 10 ? num.toString() : "0" + num.toString();
}

setInterval(() => {
  var date = new Date();

  hr.innerHTML = format_time(date.getHours());
  min.innerHTML = format_time(date.getMinutes());
  sec.innerHTML = format_time(date.getSeconds());

  pm_am.innerHTML = pm_or_am(date.getHours());
}, 1);
