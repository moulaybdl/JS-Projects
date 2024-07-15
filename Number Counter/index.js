let reset_btn = document
  .querySelector(".reset")
  .addEventListener("click", () => {
    document.getElementById("number").innerHTML = 0;
  });

let inc_btn = document.querySelector(".incr").addEventListener("click", () => {
  document.getElementById("number").innerHTML =
    Number(document.getElementById("number").innerHTML) + 1;
});

let decr_btn = document.querySelector(".dec").addEventListener("click", () => {
  document.getElementById("number").innerHTML =
    Number(document.getElementById("number").innerHTML) - 1;
});

let save_btn = document.querySelector(".save").addEventListener("click", () => {
  document.getElementById("saved_number").innerHTML +=
    document.getElementById("number").innerHTML + ", ";
});
