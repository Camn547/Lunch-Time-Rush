$(document).ready(function(){
    $(".front").hide(1)
    $(".back").on("click", function(){
        $(".back").animate({perspective: "-800px"}, 1000)
    })
})
