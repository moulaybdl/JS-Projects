var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

setInterval(() => {
  var date = new Date();

  hr.innerHTML = date.getHours();
  min.innerHTML = date.getMinutes();
  sec.innerHTML = date.getSeconds();
}, 1);
