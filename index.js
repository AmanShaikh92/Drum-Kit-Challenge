const drumButtons = document.querySelectorAll('.drum');
const sounds = {
  'w': 'tom-1',
  'l': 'tom-2',
  's': 'tom-3',
  'a': 'tom-4',
  'd': 'snare',
  'j': 'kick-bass',
  'k': 'crash'
};

drumButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonInnerHtml = button.innerHTML.toLowerCase();
    const sound = new Audio(`sounds/${sounds[buttonInnerHtml]}.mp3`);
    sound.play();
  });
});



































// var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < NumberOfDrumButtons; i++)
// {
//     document.querySelectorAll(".drum") [i].addEventListener("click",function()
//     {
//         var buttonInnerHTML = this.innerHTML;

//         switch (buttonInnerHTML){
//         case"W": 
//         var tom1 = new Audio("sounds/tom-1.mp3");
// tom1.play();
// break;

// case"l":
// var tom2 = new Audio("sounds/tom-2.mp3");
// tom2.play();
// break;


// case"s":
// var tom3 = new Audio("sounds/tom-3.mp3");
// tom3.play();
// break;


// case"a":
// var tom4 = new Audio("sounds/tom-4.mp3");
// tom4.play();
// break;


// case"d":
// var snare = new Audio("sounds/snare.mp3");
// snare.play();
// break;


// case"j":
// var Kick = new Audio("sounds/kick-bass.mp3");
// Kick.play();
// break;


// case"k":
// var crash = new Audio("sounds/crash.mp3");
// crash.play();
// break;

// default:
//         }

//     });
// }     

