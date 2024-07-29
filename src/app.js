import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

let titulo = "Magic trik";
document.title = titulo;

window.onload = function() {
  getcard();
};

function valorRandom() {
  let numero = Math.ceil(Math.random() * 13);

  if (numero == 1) {
    numero = "A";
  } else if (numero == 11) {
    numero = "J";
  } else if (numero == 12) {
    numero = "Q";
  } else if (numero == 13) {
    numero = "K";
  }
  return numero;
}

function paloRandom() {
  return Math.ceil(Math.random() * 4);
}

function getcard() {
  document.querySelector("#numero").innerHTML = valorRandom();
  switch (paloRandom()) {
    case 1:
      document.querySelector("#carta").className = "card";
      document.querySelector("#carta").classList.add("diamante");
      document.querySelector("#paloTop").innerHTML = "♦";
      document.querySelector("#paloBot").innerHTML = "♦";
      break;
    case 2:
      document.querySelector("#carta").className = "card";
      document.querySelector("#carta").classList.add("corazon");
      document.querySelector("#paloTop").innerHTML = "♥";
      document.querySelector("#paloBot").innerHTML = "♥";
      break;
    case 3:
      document.querySelector("#carta").className = "card";
      document.querySelector("#carta").classList.add("pica");
      document.querySelector("#paloTop").innerHTML = "♠";
      document.querySelector("#paloBot").innerHTML = "♠";
      break;
    case 4:
      document.querySelector("#carta").className = "card";
      document.querySelector("#carta").classList.add("trebol");
      document.querySelector("#paloTop").innerHTML = "♣";
      document.querySelector("#paloBot").innerHTML = "♣";
      break;
  }
}

document.getElementById("btn1").addEventListener("click", () => {
  getcard();
});
