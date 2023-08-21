document.addEventListener("DOMContentLoaded", function() {
    const guessButton = document.getElementById("guessButton");
    const resultElement = document.getElementById("result");

    const correctNumber = 5;

    guessButton.addEventListener("click", function() {
        const guessInput = document.getElementById("guessInput");
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            resultElement.textContent = "Masukkan angka antara 1 dan 10.";
        } else {
            if (userGuess === correctNumber) {
                resultElement.textContent = "anjay bener cok selamat, yaudah si wirr gitu doang wkwkwk, next kita main QnA arigathanksss ";
            } else {
                resultElement.textContent = "wkwk salah, ga ntok diurutno loh cok!";
            }
        }
    });
});
