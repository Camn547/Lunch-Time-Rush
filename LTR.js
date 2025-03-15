$(document).ready(function(){
    
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;



    $("button").on("click", function(){
        $(".ready").fadeOut(150)
        startTimer();
        startScore();
    })

    $(".kitty").on("click", function(){
        $(this).delay(450).fadeOut(10).html("<img src='../images/DEADkitty.png' alt='deda kitty :('></img>")
        $(".dead").html("<img src='../images/testparticles-ezgif.com-crop.gif' alt=''></img>").delay(1000).css("z-index","1").fadeOut(10)
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


    function updateDisplay() {
        let ms = milliseconds.toString().padStart(2, "0");
        let sec = seconds.toString().padStart(2, "0");
        let min = minutes.toString().padStart(2, "0");

        $("h3").html(`Time: ${min}:${sec}:${ms}`);
    }
    updateDisplay();

})