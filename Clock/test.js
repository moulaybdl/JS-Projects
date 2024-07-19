setInterval(() => {
  let day = new Date();

  let ms = day.getMilliseconds();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();

  anime({
    targets: "#sc",
    rotateZ: `${ss * 6 + ms * 0.006}deg`,
    // translateX: 200,
    duration: 0,
    loop: true,
    direction: "normal",
    easing: "linear",
  });

  anime({
    targets: "#mn",
    rotateZ: `${mm * 6}deg`,
    duration: 0,
    loop: true,
    direction: "normal",
    easing: "linear",
  });

  anime({
    targets: "#hr",
    rotateZ: `${hh * (360 / 12)}`,
    duration: 0,
    loop: true,
    direction: "normal",
    easing: "linear",
  });
}, 1);
