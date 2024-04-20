document.addEventListener("DOMContentLoaded", function () {
    const clockContainer = document.getElementById("clock-container");

    function createClock() {
        const clock = document.createElement("div");
        clock.classList.add("clock");

        const hourHand = document.createElement("div");
        hourHand.classList.add("hand", "hour-hand");

        const minuteHand = document.createElement("div");
        minuteHand.classList.add("hand", "minute-hand");

        const secondHand = document.createElement("div");
        secondHand.classList.add("hand", "second-hand");

        clock.appendChild(hourHand);
        clock.appendChild(minuteHand);
        clock.appendChild(secondHand);

        clockContainer.appendChild(clock);
    }

    function updateClockHands() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourRotation = (hours * 30) + (minutes * 0.5);
        const minuteRotation = (minutes * 6) + (seconds * 0.1);
        const secondRotation = seconds * 6;

        document.querySelector(".hour-hand").style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
        document.querySelector(".minute-hand").style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
        document.querySelector(".second-hand").style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
    }

    createClock();
    setInterval(updateClockHands, 1000);

    clockContainer.addEventListener("click", function () {
        const clock = document.querySelector(".clock");
        clock.classList.toggle("digital-clock");
    });
});
