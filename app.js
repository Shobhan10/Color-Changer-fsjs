const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  canvas.style.backgroundColor = changeColor();
});

function changeColor() {
  const data = "0123456789ABCDEF";
  let color = "#";

  for (let i = 1; i <= 6; i++) {
    color += data[Math.floor(Math.random() * 16)];
  }

  return color;
}
