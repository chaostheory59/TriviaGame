var score = 0;
var s = 60;
var incorrect = 0;
var total = 10;




$(document).ready(function() 
{
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Mortal Kombat.mp3");

    var audioElement2 = document.createElement("audio");
    audioElement2.setAttribute("src", "Fatality Mortal Kombat Sound Effect.mp3");

    var audioElement3 = document.createElement("audio");
    audioElement3.setAttribute("src", "mk-flawless-victory.mp3");

    $(".theme-button").on("click", function() 
    {
        audioElement.play();
        startTimer();
        keepScore();
    });

    document.getElementById('timer').innerHTML = 00 + ":" + s;

    $(".button-correct").on("click", function() 
    {
        score ++;
        console.log(score);
        keepScore();
        
        

    });

    $(".button-incorrect").on("click", function() 
    {
        incorrect ++;
        console.log(incorrect);
        keepScore();
        

    });
    
    function keepScore()
    {
        
        if( (score + incorrect == total) || (score == total) || (incorrect == total))
        {
            if (score > incorrect)
            {
                alert("You have won!");
                audioElement.pause();
                audioElement3.play();
                reset();
            }
            else if (score <= incorrect)
            {
                alert("FATALITY");
                audioElement.pause();
                audioElement2.play();
                reset()
            }
        }
    }
    function startTimer() 
    {
        if(s != 0)
        {
            s--;
            document.getElementById('timer').innerHTML = 0 + ":" + s;
            setTimeout(startTimer, 1000);
        }
        
        else if (s === 0)
        {
            
            alert("FATALITY");
            audioElement.pause();
            audioElement2.play();
            reset();
        }
    }

    function reset()
    {
        s = 60;
        score = 0;
        incorrect = 0;
    }


})

  
  