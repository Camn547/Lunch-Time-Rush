$(document).ready(function(){
    
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;


    $("button").on("click", function(){
        $(".ready").fadeOut(150)
        startTimer();
    })

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

    function updateDisplay() {
        let ms = milliseconds.toString().padStart(2, "0");
        let sec = seconds.toString().padStart(2, "0");
        let min = minutes.toString().padStart(2, "0");

        $("h3").html(`${min}:${sec}:${ms}`);
    }
    updateDisplay();

})