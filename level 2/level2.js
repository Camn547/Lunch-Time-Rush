$(document).ready(function() {
    // Select important elements from the DOM
    const $deck = $('.deck');
    const $reset = $('.reset-button');
    const $movesCounter = $('.move');
    const $timerDisplay = $('.time');
    $(".celebrate").hide(1)

    // Initialize game variables
    let moves = 0;
    let matchCount = 0;
    let timer = null;
    let seconds = 0;
    let isGameStarted = false; 
    let cardsFlipped = [];

    // Array of background images (two of each image URL)
    const cardImages = shuffle([ //all place holders
        "url('../Images/berd.webp')",
        "url('../Images/berd.webp')",
        "url('../Images/kitchen.png')",
        "url('../Images/kitchen.png')",
        "url('../Images/image.png')",
        "url('../Images/image.png')",
        "url('../Images/Walking1.png')",
        "url('../Images/Walking1.png')",
        "url('../Images/cattree.jpg')",
        "url('../Images/cattree.jpg')",
        "url('../Images/catfoodbowl.avif')",
        "url('../Images/catfoodbowl.avif')",
    ]);

    // Shuffle function
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    // Create a card
    function createCard(image) {
        const $cardElement = $('<div class="card"></div>').data('image', image);
        $cardElement.html(`
            <div class="card-face card-front"></div>
            <div class="card-face card-back" style="background-image: ${image};"></div>
        `);
        $cardElement.on('click', () => flipCard($cardElement));
        return $cardElement;
    }

    // Initialize the game board
    function initialize() {
        const shuffledImages = shuffle([...cardImages]);
        $deck.empty();
        shuffledImages.forEach(image => {
            const $cardElement = createCard(image);
            $deck.append($cardElement);
        });
    }

    // Start a new game
    function startGame() {
        moves = 0;
        matchCount = 0;
        seconds = 0;
        isGameStarted = false; 
        cardsFlipped = [];
        initialize();
        updateMoveCounter();
        resetTimer();
    }

    // Flip a card
    function flipCard($card) {
        if ($card.hasClass('flipped') || cardsFlipped.length === 2 || cardsFlipped.includes($card)) return;

        if (!isGameStarted) {
            isGameStarted = true;
            startTimer();
        }

        $card.addClass('flipped');
        cardsFlipped.push($card);

        if (cardsFlipped.length === 2) {
            checkForMatch();
        }
    }

    // Check if two flipped cards match
    function checkForMatch() {
        moves++;
        updateMoveCounter();

        if (cardsFlipped[0].data('image') === cardsFlipped[1].data('image')) {
            matchCount++;
            cardsFlipped.forEach($card => $card.addClass('matched'));
            if (matchCount * 2 === cardImages.length) {
                setTimeout(gameOver, 500);
            }
            cardsFlipped = [];
        } else {
            setTimeout(() => {
                cardsFlipped.forEach($card => {
                    if (!$card.hasClass('matched')) {
                        $card.removeClass('flipped');
                    }
                });
                cardsFlipped = [];
            }, 1000);
        }
    }

    // Update the move counter displayed on the screen
    function updateMoveCounter() {
        $movesCounter.text(`${moves} Moves`);
    }

    // Start the timer
    function startTimer() {
        if (timer === null) {
            timer = setInterval(() => {
                seconds++;
                $timerDisplay.text(formatTime(seconds));
            }, 1000);
        }
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    // Reset the timer to 0
    function resetTimer() {
        stopTimer();
        seconds = 0;
        $timerDisplay.text(formatTime(0));
    }

    // Format the time in MM:SS format
    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const secs = sec % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // End the game and show a congratulations message
    function gameOver() {
        stopTimer();
        $(".celebrate").show(1)
    }

    // Event listener for the reset button to start a new game
    $reset.on('click', startGame);

    // Start the game when the page loads
    startGame(); 
});
