for (var i = 0; i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click",
 function(){
   
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
 });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(key) {
    var audio;
    switch (key) {
      case "w":
        audio = new Audio("../static/sounds/tom-1.mp3");
        break;
  
      case "a":
        audio = new Audio("../static/sounds/tom-2.mp3");
        break;
  
      case "s":
        audio = new Audio("../static/sounds/tom-3.mp3");
        break;
  
      case "d":
        audio = new Audio("../static/sounds/tom-4.mp3");
        break;
  
      case "j":
        audio = new Audio("../static/sounds/snare.mp3");
        break;
  
      case "k":
        audio = new Audio("../static/sounds/crash.mp3");
        break;
  
      case "l":
        audio = new Audio("../static/sounds/kick-bass.mp3");
        break;
  
      default:
        break;
    }
  
    if (audio) {
      audio.play();
    }
  }
  

function addAnimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100); 
}

// var audio = new Audio("sounds/tom-2.mp3"); audio.play();