var noofdrum = document.querySelectorAll(".drum").length;


//button
for(var i = 0; i < noofdrum ; i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var but = this.innerHTML;
    console.log(but);
   makesound(but);
    flash(but);
});
}

//keyboard
document.addEventListener("keypress", function(event){
    var key = event.key;
    console.log(key);
    makesound(key);
    flash(key);
});

function makesound(key){

    switch (key) {
        case "a":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "d":
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        case "f":
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;   
        case "j":
            var audio = new Audio('snare.mp3');
            audio.play();
            break;     
        case "k":
            var audio = new Audio('crash.mp3');
            audio.play();
            break; 
        case "l":
            var audio = new Audio('kick-bass.mp3');
            audio.play();
            break;      
        default:
            console.log();
            break;
    }
}

function flash(ckey){
    var clicked = document.querySelector("." + ckey);
    clicked.classList.add("pressed");

    setTimeout( function(){
    clicked.classList.remove("pressed");
    } , 100);
}