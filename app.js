function kuyla(nota) {
  switch (nota) {
    case "q":
      let music1 = new Audio("sounds/Q.mp3");
      animatsiya("q");
      music1.play();
      break;
	case "w":
		let music2 = new Audio("sounds/W.mp3");
		animatsiya("w");
		music2.play();
		break;
	case "e":
		let music3 = new Audio("sounds/E.mp3");
		animatsiya("e");
		music3.play();
		break;
  case "r":
    let music4 = new Audio("sounds/R.mp3");
    animatsiya("r");
    music4.play();
    break;
  case "t":
    let music5 = new Audio("sounds/T.mp3");
    animatsiya("t");
    music5.play();
    break;
  case "y":
    let music6 = new Audio("sounds/Y.mp3");
    animatsiya("y");
    music6.play();
    break;
  case "u":
    let music7 = new Audio("sounds/U.mp3");
    animatsiya("u");
    music7.play();
    break;
  case "i":
    let music8 = new Audio("sounds/I.mp3");
    animatsiya("i");
    music8.play();
    break;
  case "o":
    let music9 = new Audio("sounds/O.mp3");
    animatsiya("o");
    music9.play();
    break;
  case "p":
    let music10 = new Audio("sounds/P.mp3");
    animatsiya("p");
    music10.play();
    break;
  }
}

function animatsiya(nota) {
  document.getElementsByClassName(nota)[0].classList.add("pressed");
  setTimeout(function () {
    document.getElementsByClassName(nota)[0].classList.remove("pressed");
  }, 100);
}

document.addEventListener("keypress", function(event){
  let nota = event.key.toLowerCase();
  if(nota=="q" || nota == "w" || nota == "e"|| nota=="r" || nota == "t"||  nota == "y" || nota == "u" || nota == "i " || nota == "o"|| nota == "p");{
    kuyla(nota);
  }
})
