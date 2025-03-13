$(document).ready(function(){
    
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let score = 1000;

    $("button").on("click", function(){
        $(".ready").fadeOut(150)
        startTimer();
        startScore();
    })

    $(".kitty").on("click", function(){
        $("img").fadeOut(2000);
    })

    function startScore(){
        interval2 = setInterval(function(){
            score -= 1;
            updateScore();
        }, 75);
    }

    function startTimer() {
        interval = setInterval(function() {
            milliseconds += 1;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds += 1;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes += 1;
            }
            updateDisplay();
        }, 10);
    }

    function stopTimer() {
        clearInterval(interval);
    }

    function updateScore(){
        let sc = score.toString().padStart("1000");

        $(".score p").html(`Score: ${sc}`);
    }

    function updateDisplay() {
        let ms = milliseconds.toString().padStart(2, "0");
        let sec = seconds.toString().padStart(2, "0");
        let min = minutes.toString().padStart(2, "0");

        $("h3").html(`Time: ${min}:${sec}:${ms}`);
    }
    updateDisplay();
    updateScore();

})