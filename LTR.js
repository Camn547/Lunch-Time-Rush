$(document).ready(function(){

    $("button").on("click", function(){
        $(".ready").fadeOut(150)
        startTimer();
        startScore();
    })

    $(".kitty").on("click", function(){
        $(this).delay(450).fadeOut(10).html("<img src='../images/DEADkitty.png' alt='deda kitty :('></img>")
        $(".dead").html("<img src='../images/testparticles-ezgif.com-crop.gif' alt=''></img>").delay(1000).css("z-index","1").fadeOut(10)
    })

})