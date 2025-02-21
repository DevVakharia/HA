document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const startDate = new Date("2023-02-28T00:00:00Z"); // Start date

    function updateTimer() {
        const now = new Date();
        let diff = now - startDate;

        let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        diff -= years * (1000 * 60 * 60 * 24 * 365);

        let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Approx. 30.44 days per month
        diff -= months * (1000 * 60 * 60 * 24 * 30.44);

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        let hours = Math.floor(diff / (1000 * 60 * 60));

        timerElement.innerHTML = `
            <div class="timer-label">Time Together</div>
            <div class="timer-values">
                <span>${years} Years</span>
                <span>${months} Months</span>
                <span>${days} Days</span>
                <span>${hours} Hours</span>
            </div>
        `;
    }

    updateTimer(); // Initial update
    setInterval(updateTimer, 1000 * 60 * 60); // Update every hour
});
