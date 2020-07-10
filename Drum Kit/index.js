for(var i=0;i <document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function() {makeSound(this.textContent);animation(this.textContent);});
    document.addEventListener("keydown",function(){makeSound(event.key);animation(event.key);});
}
function makeSound(key)
{
    switch(key)
        {
            case "z":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "x":
                var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
            case "c":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "v":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "b":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "n":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "m":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            default:
            console.log(key);
        }
}
function animation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);
}