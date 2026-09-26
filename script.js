const intro = document.getElementById("intro");
const jumpscare = document.getElementById("jumpscare");

const startButton = document.getElementById("startButton");

const scream = document.getElementById("scream");

startButton.addEventListener("click", function () {

    intro.style.display = "none";

    // Play the sound FIRST
    scream.currentTime = 0;
    scream.play();

    // Wait 2 seconds
    setTimeout(function () {

        // NOW show the scary image
        jumpscare.style.display = "flex";

        const scaryImage = document.querySelector("#jumpscare img");
        scaryImage.style.display = "block";

    }, 3000);

});