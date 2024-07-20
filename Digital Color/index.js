let possible_char = "0123456789ABCDEF";
let boxes = document.querySelectorAll(".color");

function random_color_generator(possible_char) {
  let result = "";
  while (result.length <= 5) {
    let randomIndex = Math.floor(Math.random() * possible_char.length);
    result += possible_char[randomIndex];
  }
  return "#" + result;
}

document.addEventListener("DOMContentLoaded", () => {
  boxes.forEach((element) => {
    element.innerHTML = random_color_generator(possible_char);
    element.style.backgroundColor = element.innerHTML;
  });
});

document.getElementById("refresh").addEventListener("click", () => {
  boxes.forEach((element) => {
    element.innerHTML = random_color_generator(possible_char);
    element.style.backgroundColor = element.innerHTML;
  });
});

boxes.forEach((element) => {
  element.addEventListener("click", (event) => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = event.target.innerHTML;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    anime({
      targets: ".copy-text",
      opacity: 100,
      duration: 4000,
      direction: "alternate",
      easing: "easeInQuad",
    });
  });
});
