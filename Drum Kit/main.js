let button = document.querySelectorAll(".box");

button.forEach((element) => {
  element.addEventListener("click", (event) => {
    const id = event.target.id;
    switch (id) {
      case "A":
        var audio = new Audio("sounds/clap.wav");
        break;
      case "S":
        var audio = new Audio("sounds/hihat.wav");
        break;
      case "D":
        var audio = new Audio("sounds/kick.wav");
        break;
      case "F":
        var audio = new Audio("sounds/openhat.wav");
        break;
      case "G":
        var audio = new Audio("sounds/boom.wav");
        break;
      case "H":
        var audio = new Audio("sounds/ride.wav");
        break;
      case "J":
        var audio = new Audio("sounds/snare.wav");
        break;
      case "K":
        var audio = new Audio("sounds/tom.wav");
        break;
      case "L":
        var audio = new Audio("sounds/tink.wav");
        break;
      default:
        break;
    }
    // Activate the sound:
    audio.play();
  });
});
