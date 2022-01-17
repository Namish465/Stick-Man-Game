const Stick = document.getElementById("Stick");
const iron = document.getElementById("iron");

function jump() {
  if (Stick.classList != "jump") {
    Stick.classList.add("jump");

    setTimeout(function () {
      Stick.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  
  let StickTop = parseInt(window.getComputedStyle(Stick).getPropertyValue("top"));

  let ironLeft = parseInt(
    window.getComputedStyle(iron).getPropertyValue("left")
  );

  
  if (ironLeft < 50 && ironLeft > 0 && StickTop >= 140) {
    
    alert("Game Over! Try Again");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});