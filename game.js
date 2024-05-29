buttonColours = ["red", "blue", "green", "yellow"];
gamePattern=[];
var c=0;
var x=0;
$(document).keypress(function() {
    if (x==0){nextSequence();
        x++;
    }
});

function nextSequence(){
    userClickedPattern = [];
    c++;
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    $("h2").text("Level "+c);
    $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    i=0;
}

var i=0;
$(".btn").click(function (){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    if (userClickedPattern[i]!=gamePattern[i]){
        c=0;
        x=0;
        gamePattern=[];
        userClickedPattern=[];
        var audio1=new Audio("./sounds/wrong.mp3");
        audio1.play();
        $("h2").text("GAME OVER..PRESS ANY KEY TO RESTART THE GAME")
        $("body").addClass("game-over");
        setTimeout(function (){$("body").removeClass("game-over");},200);
    }  
    i++;

    if (userClickedPattern.length==gamePattern.length && userClickedPattern[i-1]==gamePattern[i-1] && gamePattern.length!=0){
        setTimeout(nextSequence, 1000);
    }
})   

function playSound(name){
    var audio = new Audio(src = "./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed"); 
    },100);
}