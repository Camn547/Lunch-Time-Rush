$(document).ready(function(){
    let subject = "";
    $("h3").html(`${subject}`)
    
    $(".English").on('click', function(){
        let subject = "English"
        return subject
    })
    $(".Math").on('click', function(){
        let subject = "Math"
        return subject
    })
    $(".History").on('click', function(){
        let subject = "History"
        return subject
    })
    $(".Science").on('click', function(){
        let subject = "Science"
        return subject
    })

})