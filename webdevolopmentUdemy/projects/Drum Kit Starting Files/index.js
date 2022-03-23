
var length=document.querySelectorAll(".drum").length

for(i=0;i<length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() { 

var innercontent=this.innerHTML;
// console.log(innercontent);

makeSound(innercontent)
buttonAnimation(innercontent)

})
}

document.addEventListener("keypress",function() {
    makeSound(event.key)
    buttonAnimation(event.key)
})



function makeSound(key)
{
switch(key)
{
    case "w":
    var crash=new Audio("sounds/crash.mp3");
    crash.play()
    break;

    case "a":
    var kick=new Audio("sounds/kick-bass.mp3")
    kick.play()
    break;

    case "s":
    var snare=new Audio("sounds/snare.mp3")
    snare.play()
    break;

    case "d":
    var tom_1=new Audio("sounds/tom-1.mp3")
    tom_1.play()

    break;

    case "j":
    var tom_2=new Audio("sounds/tom-2.mp3")
    tom_2.play()
    break;

    case "k":
    var tom_3=new Audio("sounds/tom-3.mp3")
    tom_3.play()
    break;

    case "l":
    var tom_4=new Audio("sounds/tom-4.mp3")
    tom_4.play()
    break;
}
}

function buttonAnimation(keypress)
{
    var ActiveBUtton=document.querySelector("." + keypress)
    ActiveBUtton.classList.add("pressed")

setTimeout(function () {
    ActiveBUtton.classList.remove("pressed");
},100);    
    

    
}




// { var audio= new Audio("sounds/tom-1.mp3");audio.play()}
//simplified method

// document.querySelectorAll(".drum").forEach(data=>data.addEventListener("click",function() {alert("i got cliked") } ) )

