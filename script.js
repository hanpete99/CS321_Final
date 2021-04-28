function makeRGBValue() {
    return Math.round(Math.random() * 255);
}
  
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style','background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
}

function startGame(){
    var buttons = document.getElementsByClassName('colorButton');
    var heading = document.getElementById('rgbValue');
    var answerMessage = document.getElementById('answer');

    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random() * (buttons.length - 1));
  
    for (var i = 0; i < buttons.length; i++) {
        var red = makeRGBValue();
        var green = makeRGBValue();
        var blue = makeRGBValue();
  
        setButtonColor(buttons[i], red, green, blue);
  
        if (i === answerButton) {
            heading.innerHTML =`(${red}, ${green}, ${blue})`;
        }
  
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
            } 
            else {
                answerMessage.innerHTML = "Wrong answer! Guess again.";
            }
        });
    }
}

document.getElementById('resetButton').addEventListener('click', startGame);
startGame();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "12px Verdana";
ctx.fillText("Project by Hannah Peterson, Elena Rios, and Abigail PinterParsons", 20, 30);

$(function() {

    // All elements
    $('body').fontFlex(18, 64, 80);
  
    // H1 only
    $('h1').fontFlex(36, 64, 80);	
    
  });