// BMI Calculator

const bmiButton = document.querySelector(".bmi-card button");

if (bmiButton) {
    bmiButton.addEventListener("click", function () {

        const height = Number(document.getElementById("height").value);
        const weight = Number(document.getElementById("weight").value);

        if (height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight.");
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        document.querySelector("#bmi-result p").textContent =
            "Your BMI is: " + bmi.toFixed(1);
    });
}

// Contact Form

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent.");

        contactForm.reset();
    });
}


// Mobile Menu

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", function() {
        nav.classList.toggle("show-menu");
    });
}

let restTimerInterval;

function startRestTimer() {
    let time = 60;

    const timer = document.getElementById("rest-timer");
    timer.textContent = time;

    clearInterval(restTimerInterval);

    restTimerInterval = setInterval(function () {
        time--;
        timer.textContent = time;

        if (time <= 0) {
            clearInterval(restTimerInterval);

            // Beep sound
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();

            oscillator.frequency.value = 800;
            oscillator.connect(audioContext.destination);
            oscillator.start();

            setTimeout(function () {
                oscillator.stop();
            }, 500);

            alert("⏱️ Rest complete! Get ready for the next exercise.");
        }
    }, 1000);
}