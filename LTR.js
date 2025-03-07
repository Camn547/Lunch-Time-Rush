$(document).ready(function(){
    
    // arrays for all questions of each subject
    const QEnglish = [
        ""
    ];

    const QMath = [
        // x = 7
        'Solve for x, "4 (x + 5) = 48"',

        // 256
        'What is 16 ^ 2?',

        // 7.5
        'Solve: 6 + 3 * (5 - 3) ÷ 4.',

        // 11/8 or 1 3/8
        'What is 3/4 + 5/8 simplified?',

        // 7.43
        'Add 4.75 and 2.68.'
    ];

    const QHistory = [
        ""
    ];

    const QScience = [
        ""
    ];

    let subject;
    $(".English").on('click', function(){
        subject = "English"
    })

    $(".Math").on('click', function(){
        subject = "Math"
    })

    $(".History").on('click', function(){
        subject = "History"
    })

    $(".Science").on('click', function(){
        subject = "Science"
    })

    setInterval(function(){
        console.log(subject)
    },1000);

})