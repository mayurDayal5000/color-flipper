const backgroundContainer = document.getElementById("root");
const colorBox = document.querySelector(".color-box span");
const changeBtn = document.querySelector("button");

const colorCode = "abcdef1234567890";

changeBtn.onclick = () => {
  let hexPattern = "#";

  for (let counter = 0; counter < 6; counter++) {
    hexPattern += colorCode[Math.floor(Math.random() * colorCode.length)];
  }

  backgroundContainer.style.backgroundColor = hexPattern;
  colorBox.textContent = hexPattern;
  colorBox.style.color = hexPattern;

  document.title = hexPattern;
};
