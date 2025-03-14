$(document).ready(function(){
    // $(".front").hide(1)
    // $(".back").on("click", function(){
    //     $(".front").show(1)
    //     $(".back").animate({width: "1px", marginLeft: "7rem"}, 1000)
    //     $(".front").delay(1000).animate({width: "30rem", marginLeft: "-7.5rem"}, 1000)
    // })
    const cards = [["10rem", "6rem"], ["10rem", "20rem"], ["10rem", "34rem"], ["10rem", "48rem"], ["10rem", "62rem"], ["10rem", "76rem"], ["26rem","6rem"], ["26rem","20rem"], ["26rem","34rem"], ["26rem","48rem"], ["26rem","62rem"], ["26rem","76rem"]]

    var treats = 0
    var cat = 0
    var mouse = 0
    var yarn = 0
    match = 0


    var randomIndex = Math.floor(Math.random() * cards.length)


    $("#game img").each(function(index, element) {
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