// Getting the text that refers to the color
let colorText = document.getElementById("colorText");

// Getting the color box
let colorBox = document.getElementById("colorBox");

// Getting the button
let btn = document.getElementById("btn");

// Getting the symbols used for colors in hexadecimal format
const symbols = "0123456789ABCDEF";

// Function called when the button is clicked
function colorChanger() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  colorText.innerHTML = color;
  colorBox.style.backgroundColor = color;
  color = "";
}
