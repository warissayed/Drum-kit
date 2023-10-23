var btnlength = document.querySelectorAll("button").length

for (var i = 0; i < btnlength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
       var btnInnerHtml = this.innerHTML;
        makesound(btnInnerHtml);
        });// for mouse clicks
}
document.addEventListener("keypress",function (event) {

    makesound(event.key)
    });//for keybord click

//higher order function & call back audio file
function makesound(key) {
    switch (key) {
            case "w":
            var sound = new Audio("./sounds/tom-1.mp3")
            sound.play();
            
            break;

            case "a":
            var sound = new Audio("./sounds/tom-2.mp3")
            sound.play();
            
            break;

            case "s":
            var sound = new Audio("./sounds/tom-3.mp3")
            sound.play();
            
            break;

            case "d":
            var sound = new Audio("./sounds/tom-4.mp3")
            sound.play();
            
            break;

            case "j":
            var sound = new Audio("./sounds/kick-bass.mp3")
            sound.play();
            
            break;

            case "k":
            var sound = new Audio("./sounds/snare.mp3")
            sound.play();
            
            break;

            case "l":
            var sound = new Audio("./sounds/crash.mp3")
            sound.play();
            
            break;
    
        default:
            break;
    }}
