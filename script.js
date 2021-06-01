$(function() {

    const colorSwitch = document.getElementById("input-color-switch");
    // get all cards
    const cards = document.querySelectorAll(".project-card");

    colorSwitch.addEventListener("click", checkMode);

    function checkMode() {
        console.log("checking...");
        if (colorSwitch.checked) {
            console.log("dark on");
            darkModeOn();
        } else {
            console.log("dark off");
            darkModeOff();
        }
    }

    function darkModeOn() {
        document.body.classList.add("night-mode");
        for(let i=0;i<cards.length;i++){
            // add class for cards 
            cards[i].classList.add("night-mode-card");
        }
    }

    function darkModeOff() {
        document.body.classList.remove("night-mode");
        for(let i=0;i<cards.length;i++){
            // remove the class for cards
            cards[i].classList.remove("night-mode-card");
        }
    }
});