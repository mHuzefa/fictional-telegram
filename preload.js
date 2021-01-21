const wrapper = document.querySelector(".wrapper .a-wrapper");
let alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let i = 1; i < 80; i++) {
  let div = document.createElement("div");
  let animeCircle = wrapper.appendChild(div);
  animeCircle.classList.add("circle");
  animeCircle.textContent =
    alphabets[Math.round(Math.random() * 40)] || Math.round(Math.random() * 10);
  animeCircle.style.fontSize = `${Math.round(Math.random() * 7)}rem`;

  let saturation = 60;
  let lumonisity = 70;
  let hue = Math.round(Math.random() * 360);
  let hslValue = "hsl(" + hue + "," + saturation + "%," + lumonisity + "%)";
  animeCircle.style.color = hslValue;
}

let circles = document.querySelectorAll(".circle");

anime({
  tragets: ".a-wrapper",
  loop: true,
  direction: "alternate",
  easing: "easeOutExpo",
  scale: 1.3,
  duration: 250,
  backgroundColor: "#000",
});

let randomAnimation = anime({
  targets: circles,
  translateX: () => {
    return anime.random(-100, 100) + "vh";
  },
  translateY: () => {
    return anime.random(-100, 100) + "vh";
  },
  scale: () => {
    return [0, anime.random(0.45, 1.75)];
  },
  duration: () => {
    return anime.random(250, 1500);
  },
  rotate: () => anime.random(0, 30),
  delay: anime.stagger(10, { start: 100 }),
  loop: true,
  direction: "alternate",
  easing: "easeOutExpo",
});
randomAnimation.speed = 0.5;

window.onload = function () {
  anime({
    targets: ".wrapper",
    opacity: 0,
    scale: 0,
    duration: 200,
  });
};
