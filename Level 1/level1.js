$(document).ready(function(){
    // $(".front").hide(1)
    // $(".back").on("click", function(){
    //     $(".front").show(1)
    //     $(".back").animate({width: "1px", marginLeft: "7rem"}, 1000)
    //     $(".front").delay(1000).animate({width: "30rem", marginLeft: "-7.5rem"}, 1000)
    // })
    const cards = [["8rem", "16rem"], ["8rem", "41rem"], ["8rem", "66rem"], ["28rem", "16rem"], ["28rem", "41rem"], ["28rem", "66rem"]]

    var treats = 0
    var cat = 0
    var mouse = 0
    var yarn = 0
    match = 0


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

    $(".card").on("click", function(){
        if ($(this).attr("id") == "cat"){
            cat++
            mouse = 0
            yarn = 0
        }
        if ($(this).attr("id") == "mouse"){
            mouse++
            cat = 0
            yarn = 0
        }
        if ($(this).attr("id") == "yarn"){
            yarn++
            cat = 0
            mouse = 0
        }
        if (cat == 2){
            match++
            treats += 15
        }
        if (mouse == 2){
            match++
            treats += 15
        }
        if (yarn == 2){
            match++
            treats += 15
        }
        console.log(cat, mouse, yarn, match, treats)
    })
})

