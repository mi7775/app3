function showScreen(screenNumber) {
    // Hide all screens
    const screens = document.querySelectorAll('.game-container');
    screens.forEach(screen => screen.style.display = 'none');

    // Show the selected screen
    const selectedScreen = document.getElementById('screen' + screenNumber);
    selectedScreen.style.display = 'flex';
}

function checkAnswer() {
    // Get value from the input box
    const answerInput = document.getElementById("answerInput");
    const answer = parseInt(answerInput.value, 10); // Chuyển giá trị sang số nguyên

    if (answer === 5) {
        // Move to Screen 6 if the answer is correct
        showScreen(6);
    } else {
        // Move to Screen 5 if the answer is incorrect
        showScreen(5);

        // After 6 seconds (6000ms), return to Screen 4
        setTimeout(() => {
            showScreen(4);
        }, 6000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let clickCount = 0; // Tracks the number of clicks
    let selectedButtons = new Set(); // Stores clicked buttons

    // Button list and corresponding images
    const buttons = {
        B4S6: { id: "btnB4S6", newImg: "images/B4.1S6.png", originalImg: "images/B4S6.png" },
        B6S6: { id: "btnB6S6", newImg: "images/B6.1S6.png", originalImg: "images/B6S6.png" },
        B8S6: { id: "btnB8S6", newImg: "images/B8S6.png", originalImg: "images/B8S6.png" },
        B10S6: { id: "btnB10S6", newImg: "images/B10.1S6.png", originalImg: "images/B10S6.png" }
    };

    const B11S6 = document.getElementById("B11S6");

    // Function to set up click events for buttons
    function setupButton(buttonKey) {
        const button = document.getElementById(buttons[buttonKey].id);
        if (!button) return;

        button.addEventListener("click", function () {
            clickCount++;
            selectedButtons.add(buttonKey); // Store the clicked button

            // **Handle B8S6 Case**
            if (buttonKey === "B8S6") {
                // Ensure B11S6 always appears above B7S6 & B8S6
                B11S6.style.display = "block";
                B11S6.style.position = "absolute";
                /*B11S6.style.top = "calc(50% - 80px)"; // Adjust to be above B7S6 & B8S6*/
                B11S6.style.top = "58%"; // Center vertically
                B11S6.style.left = "50%";
                B11S6.style.transform = "translateX(-50%)";
                B11S6.style.zIndex = "10"; // Ensure it is on top

                // If B8S6 is clicked, reset everything after 700ms
                setTimeout(resetButtons, 700);
                return;
            }

            // If it's not B8S6 → Change image to the new state
            this.setAttribute("src", buttons[buttonKey].newImg + "?t=" + new Date().getTime());

            // Check conditions to transition to Screen 8
            if (clickCount <= 3 && selectedButtons.has("B4S6") && selectedButtons.has("B6S6") && selectedButtons.has("B10S6")) {
                setTimeout(() => {
                    document.getElementById("screen6").style.display = "none";
                    document.getElementById("screen8").style.display = "block";
                }, 500);
            }
        });
    }

    // Assign click events to each button
    Object.keys(buttons).forEach(setupButton);

    // Reset button states
    function resetButtons() {
        Object.keys(buttons).forEach(buttonKey => {
            document.getElementById(buttons[buttonKey].id).setAttribute("src", buttons[buttonKey].originalImg);
        });

        B11S6.style.display = "none";
        clickCount = 0;
        selectedButtons.clear();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const btnB2S8 = document.getElementById("btnB2S8");
    const btnB3S8 = document.getElementById("btnB3S8");
    const btnB4S8 = document.getElementById("btnB4S8");
    const popupB5S8 = document.getElementById("popupB5S8");
    const closePopup8 = document.getElementById("closePopup8");
    const screen8 = document.getElementById("screen8");
    const overlay8 = document.getElementById("overlay8");

    // Show Screen 10
    function showScreen10() {
        document.getElementById("screen8").style.display = "none";
        document.getElementById("screen10").style.display = "block";
    }

    // Click on B2S8 -> Change Image & Go to Screen 10
    btnB2S8.addEventListener("click", function () {
        btnB2S8.src = "images/B2.1S8.png"; // Change to B2.1S8
        setTimeout(showScreen10, 500); // Transition to Screen 10
    });

    // Click on B3S8 or B4S8 -> Show Popup B5S8 & Blur Screen 8
    function showPopup() {
        popupB5S8.style.display = "flex";
        overlay8.classList.add("blur8");
    }

    btnB3S8.addEventListener("click", showPopup);
    btnB4S8.addEventListener("click", showPopup);

    // Close Popup & Remove Blur
    closePopup8.addEventListener("click", function () {
        popupB5S8.style.display = "none";
        overlay8.classList.remove("blur8");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Elements for Screen 8
    const btnB2S8 = document.getElementById("btnB2S8");
    const btnB3S8 = document.getElementById("btnB3S8");
    const btnB4S8 = document.getElementById("btnB4S8");
    const popupB5S8 = document.getElementById("popupB5S8");
    const closePopup8 = document.getElementById("closePopup8");
    const overlay8 = document.getElementById("overlay8");

    // Elements for Screen 10
    const btnB2S10 = document.getElementById("btnB2S10");
    const btnB3S10 = document.getElementById("btnB3S10");
    const btnB4S10 = document.getElementById("btnB4S10");
    const popupB5S10 = document.getElementById("popupB5S10");
    const closePopup10 = document.getElementById("closePopup10");
    const overlay10 = document.getElementById("overlay10");

    // Elements for Screen 12
    const btnB2S12 = document.getElementById("btnB2S12");
    const btnB3S12 = document.getElementById("btnB3S12");
    const btnB4S12 = document.getElementById("btnB4S12");
    const popupB5S12 = document.getElementById("popupB5S12");
    const closePopup12 = document.getElementById("closePopup12");
    const overlay12 = document.getElementById("overlay12");

    // Elements for Screen 14
    const btnB2S14 = document.getElementById("btnB2S14");
    const btnB3S14 = document.getElementById("btnB3S14");
    const btnB4S14 = document.getElementById("btnB4S14");
    const popupB5S14 = document.getElementById("popupB5S14");
    const closePopup14 = document.getElementById("closePopup14");
    const overlay14 = document.getElementById("overlay14");

    // Elements for Screen 16
    const btnB2S16 = document.getElementById("btnB2S16");
    const btnB3S16 = document.getElementById("btnB3S16");
    const btnB4S16 = document.getElementById("btnB4S16");
    const popupB5S16 = document.getElementById("popupB5S16");
    const closePopup16 = document.getElementById("closePopup16");
    const overlay16 = document.getElementById("overlay16");

    // Elements for Screen 18
    const b2s18 = document.getElementById("btnB2S18");
    const b3s18Items = document.querySelectorAll(".b3s18");
    const b4s18 = document.getElementById("btnB4S18");

    // Function to transition screens
    function showScreen(screenToHide, screenToShow) {
        document.getElementById(screenToHide).style.display = "none";
        document.getElementById(screenToShow).style.display = "block";
    }

    // Screen 8 - Click B2S8 → Change Image & Go to Screen 10
    if (btnB2S8) {
        btnB2S8.addEventListener("click", function () {
            btnB2S8.src = "images/B2.1S8.png"; // Change to B2.1S8
            setTimeout(() => showScreen("screen8", "screen10"), 500);
        });
    }

    // Screen 8 - Click B3S8 or B4S8 → Show Popup B5S8 & Blur Screen
    function showPopup8() {
        popupB5S8.style.display = "flex";
        overlay8.classList.add("blur8");
    }

    if (btnB3S8) btnB3S8.addEventListener("click", showPopup8);
    if (btnB4S8) btnB4S8.addEventListener("click", showPopup8);

    // Close Popup in Screen 8
    if (closePopup8) {
        closePopup8.addEventListener("click", function () {
            popupB5S8.style.display = "none";
            overlay8.classList.remove("blur8");
        });
    }

    /*++++++++++++++++++++++++++++++++++++++*/
    // Screen 10 - Click B3S10 → Change Image & Go to Screen 12
    if (btnB3S10) {
        btnB3S10.addEventListener("click", function () {
            btnB3S10.src = "images/B3.1S10.png"; // Change to B3.1S10
            setTimeout(() => showScreen("screen10", "screen12"), 500);
        });
    }

    // Screen 10 - Click B2S10 or B4S10 → Show Popup B5S10 & Blur Screen
    function showPopup10() {
        popupB5S10.style.display = "flex";
        overlay10.classList.add("blur10");
    }

    if (btnB2S10) btnB2S10.addEventListener("click", showPopup10);
    if (btnB4S10) btnB4S10.addEventListener("click", showPopup10);

    // Close Popup in Screen 10
    if (closePopup10) {
        closePopup10.addEventListener("click", function () {
            popupB5S10.style.display = "none";
            overlay10.classList.remove("blur10");
        });
    }

    /*++++++++++++++++++++++++++++++++++++++*/
    // Screen 12 - Click B3S12 → Change Image & Go to Screen 14
    if (btnB3S12) {
        btnB3S12.addEventListener("click", function () {
            btnB3S12.src = "images/B3.1S12.png"; // Change to B3.1S12
            setTimeout(() => showScreen("screen12", "screen14"), 500);
        });
    }

    // Screen 12 - Click B2S12 or B4S12 → Show Popup B5S12 & Blur Screen
    function showPopup12() {
        popupB5S12.style.display = "flex";
        overlay12.classList.add("blur12");
    }

    if (btnB2S12) btnB2S12.addEventListener("click", showPopup12);
    if (btnB4S12) btnB4S12.addEventListener("click", showPopup12);

    // Close Popup in Screen 12
    if (closePopup12) {
        closePopup12.addEventListener("click", function () {
            popupB5S12.style.display = "none";
            overlay12.classList.remove("blur12");
        });
    }

    /*++++++++++++++++++++++++++++++++++++++*/
    // Screen 14 - Click B3S14 → Change Image & Go to Screen 16
    if (btnB3S14) {
        btnB3S14.addEventListener("click", function () {
            btnB3S14.src = "images/B3.1S14.png"; // Change to B3.1S14
            setTimeout(() => showScreen("screen14", "screen16"), 500);
        });
    }

    // Screen 14 - Click B2S14 or B4S14 → Show Popup B5S14 & Blur Screen
    function showPopup14() {
        popupB5S14.style.display = "flex";
        overlay14.classList.add("blur14");
    }

    if (btnB2S14) btnB2S14.addEventListener("click", showPopup14);
    if (btnB4S14) btnB4S14.addEventListener("click", showPopup14);

    // Close Popup in Screen 14
    if (closePopup14) {
        closePopup14.addEventListener("click", function () {
            popupB5S14.style.display = "none";
            overlay14.classList.remove("blur14");
        });
    }

    /*++++++++++++++++++++++++++++++++++++++*/
    // Screen 16 - Click B3S16 → Change Image & Go to Screen 18
    if (btnB4S16) {
        btnB4S16.addEventListener("click", function () {
            btnB4S16.src = "images/B4.1S16.png"; // Change to B4.1S16
            setTimeout(() => showScreen("screen16", "screen18"), 500);
        });
    }

    // Screen 16 - Click B2S16 or B3S16 → Show Popup B5S16 & Blur Screen
    function showPopup16() {
        popupB5S16.style.display = "flex";
        overlay16.classList.add("blur16");
    }

    if (btnB2S16) btnB2S16.addEventListener("click", showPopup16);
    if (btnB3S16) btnB3S16.addEventListener("click", showPopup16);

    // Close Popup in Screen 16
    if (closePopup16) {
        closePopup16.addEventListener("click", function () {
            popupB5S16.style.display = "none";
            overlay16.classList.remove("blur16");
        });
    }

    /* ========================== SCREEN 18 ANIMATIONS ========================== */

    // Function: B2S18 moves up and down continuously
    function animateB2S18(element, speed = 400, distance = 10) {
        let direction = 1;
        setInterval(() => {
            element.style.transform = `translateY(${direction * distance}px)`;
            direction *= -1;
        }, speed);
    }

    // Function: All B3S18 rotate continuously on Y-axis (without moving up/down)
    function rotateB3S18(elements, speed = 30) {
        let angle = 0;
        function rotate() {
            angle = (angle + 10) % 360;
            elements.forEach((element) => {
                element.style.transform = `rotateY(${angle}deg)`;
            });
            requestAnimationFrame(rotate);
        }
        rotate();
    }

    // Function: B4S18 moves very fast, pauses for 6s after the 3rd downward move
    function animateB4S18(element, speed = 150, distance = 10, pauseTime = 2000) {
        let direction = 1;
        let downCount = 0;

        function move() {
            element.style.transform = `translateY(${direction * distance}px)`;
            if (direction === 1) {
                downCount++;
                if (downCount === 3) {
                    setTimeout(move, pauseTime); // Pause for 6s after the 3rd downward move
                    downCount = 0; // Reset counter
                    return;
                }
            }
            direction *= -1;
            setTimeout(move, speed);
        }
        move();
    }

    // Apply animations
    if (b2s18) animateB2S18(b2s18, 300); // Faster up-down movement
    if (b3s18Items.length > 0) rotateB3S18(b3s18Items, 20); // Only rotates, no up/down movement
    if (b4s18) animateB4S18(b4s18, 100); // Moves down 3 times & stops
});
