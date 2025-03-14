$(document).ready(function(){
    // $(".front").hide(1)
    // $(".back").on("click", function(){
    //     $(".front").show(1)
    //     $(".back").animate({width: "1px", marginLeft: "7rem"}, 1000)
    //     $(".front").delay(1000).animate({width: "30rem", marginLeft: "-7.5rem"}, 1000)
    // })
    $(".celebrate").hide(1)
    const cards = [["8rem", "16rem"], ["8rem", "41rem"], ["8rem", "66rem"], ["28rem", "16rem"], ["28rem", "41rem"], ["28rem", "66rem"]]

    var choice1;
    var choice2;
    var possible_match = 0
    var match = 0
    var treats = 0


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
        possible_match++
        if (possible_match == 1){
            choice1 = $(this).attr("id")
            $(this).css('border','2px solid yellow')
        }
        else if (possible_match == 2){
            choice2 = $(this).attr("id")
        }
        if (possible_match > 2){
            possible_match = 1
        }
        if (choice1 == choice2){
            match++
            treats += 15
            $("#"+choice1).remove()
            $("#"+choice2).remove()
            console.log(choice1, choice2, possible_match, match)

            choice1 = undefined
            choice2 = undefined        
            possible_match=0 
            $(".treatsCounter").html(`<h1>Treats: ${treats}</h1>`)
            if (match == 3) {
                $(".celebrate").show(1)
            }
            $(this).addClass("hue-rotate")
        }
    })

})

