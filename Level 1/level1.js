$(document).ready(function(){
    // $(".front").hide(1)
    // $(".back").on("click", function(){
    //     $(".front").show(1)
    //     $(".back").animate({width: "1px", marginLeft: "7rem"}, 1000)
    //     $(".front").delay(1000).animate({width: "30rem", marginLeft: "-7.5rem"}, 1000)
    // })
    cards = [["8rem", "16rem"], ["8rem", "41rem"], ["8rem", "66rem"], ["28rem", "16rem"], ["28rem", "41rem"], ["28rem", "66rem"]]


    var randomIndex = Math.floor(Math.random() * cards.length)


    $("img").each(function(index, element) {
        console.log(randomIndex)
        $(element).css('position', 'absolute')
        console.log(cards)
        $(element).css('top', cards[randomIndex][0])
        $(element).css('right', cards[randomIndex][1])
        randomIndex++
        if (randomIndex >= cards.length) {
            randomIndex = 0
        }
    })
})

