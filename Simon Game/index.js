var buttonColor=["green","blue","yellow","red"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var gameStarted=false;
$(document).keypress(function(){
    if(gameStarted==false)
    {   
        gameStarted = true;
        nextSequence();     
    }
});

$(".btn").click(function(){
    var userChosenColor =this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(current)
{
    if (userClickedPattern[current]===gamePattern[current])
    {   
        if (userClickedPattern.length === gamePattern.length)
        {
        userClickedPattern=[];
        setTimeout(function () {nextSequence();}, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");}, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function nextSequence()
{ 
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomColor=buttonColor[randomNumber];
    gamePattern.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
   
}
function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor)
{
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){$("#"+ currentColor).removeClass("pressed");  }, 100);
}
function startOver() {
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    gameStarted=false;   
}