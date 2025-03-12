$(document).ready(function(){
    
    let difficulty;
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let on = false;

    $(".Easy").on('click', function(){
        difficulty = "Easy"
    })

    $(".Medium").on('click', function(){
        difficulty = "Medium"
    })

    $(".Hard").on('click', function(){
        difficulty = "Hard"
    })

    if(on == true){
        startTimer();
    }else{
        stopTimer();
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

    function updateDisplay() {
        let ms = milliseconds.toString().padStart(2, "0");
        let sec = seconds.toString().padStart(2, "0");
        let min = minutes.toString().padStart(2, "0");

        $("h3").html(`${min}:${sec}:${ms}`);
    }
    updateDisplay();

})