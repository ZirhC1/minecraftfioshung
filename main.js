// Functionize Minecraft Fishing Start Code

//FISH COUNT VARIABLES
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //Steve fish simulator
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.7) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    console.log("Cod");
  } else if (randNum < 0.9) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    console.log("Salmon");
  } else if (randNum < 0.95) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    console.log("Tropical");
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    console.log("Puffer");
  }
}
