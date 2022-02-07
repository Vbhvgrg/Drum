var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click",sound);
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAni(event.key);
});

function makeSound(H){
  if(H === 'k'){
    const music = new Audio('sounds/crash.mp3');
     music.play();
  }
  if(H === 'l'){
    const music = new Audio('sounds/kick-bass.mp3');
     music.play();
  }
  if(H === 'j'){
    const music = new Audio('sounds/snare.mp3');
     music.play();
  }
  if(H === 'd'){
    const music = new Audio('sounds/tom-4.mp3');
     music.play();
  }
  if(H === 's'){
    const music = new Audio('sounds/tom-3.mp3');
     music.play();
  }
  if(H === 'a'){
    const music = new Audio('sounds/tom-2.mp3');
     music.play();
  }
  if(H === 'w'){
    const music = new Audio('sounds/tom-1.mp3');
     music.play();
  }

}


function sound(){
var H = this.innerHTML;
  if(H === 'k'){
    const music = new Audio('sounds/crash.mp3');
     music.play();
  }
  if(H === 'l'){
    const music = new Audio('sounds/kick-bass.mp3');
     music.play();
  }
  if(H === 'j'){
    const music = new Audio('sounds/snare.mp3');
     music.play();
  }
  if(H === 'd'){
    const music = new Audio('sounds/tom-4.mp3');
     music.play();
  }
  if(H === 's'){
    const music = new Audio('sounds/tom-3.mp3');
     music.play();
  }
  if(H === 'a'){
    const music = new Audio('sounds/tom-2.mp3');
     music.play();
  }
  if(H === 'w'){
    const music = new Audio('sounds/tom-1.mp3');
     music.play();
  }
  buttonAni(H);
}

function buttonAni(curr){
    var A = document.querySelector("."+curr);
    A.classList.add("pressed");

    setTimeout(function(){
      A.classList.remove("pressed");
    },200);
}
