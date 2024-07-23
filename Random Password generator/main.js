let generate_bnt = document.querySelector(".generate-btn");

generate_bnt.addEventListener("click", () => {
  let num = document.querySelector(".char-num");

  while (num.value.length == 0);

  var lc = document.querySelector(".lc input");
  var uc = document.querySelector(".lc input");
  var symbols = document.querySelector(".symbols input");
  var numbers = document.querySelector(".numbers input");

  var options = [lc, uc, symbols, numbers];

  var states = options.map((el) => {
    return el.checked;
  });

  console.log(states);

  var pattern = generatePattern(states);
  if (pattern === "") return;

  var pwd = build_pwd(pattern, num.value);

  var pwd_box = document.querySelector(".password");

  pwd_box.innerHTML = pwd;
});

function generatePattern(states) {
  var pattern = "";
  for (let i = 0; i < 4; ++i) {
    if (i == 0 && states[i] === true) {
      pattern += "abcdefghijklmnopqrstuvwxyz";
    } else if (i == 1 && states[i] === true) {
      pattern += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (i == 2 && states[i] === true) {
      pattern += "!@#$%^&*()_+-=[]{}|;':\",./<>?\\";
    } else if (i == 3 && states[i] === true) {
      pattern += "0123456789";
    }
  }
  return pattern;
}

function build_pwd(pattern, len) {
  var pwd = "";
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * pattern.length);
    pwd += pattern[randomIndex];
  }
  return pwd;
}
