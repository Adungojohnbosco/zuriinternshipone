 // JavaScript to fill in dynamic content
 document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    const currentDate = new Date();

    // Array of days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Fill in the current day of the week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = daysOfWeek[currentDate.getDay()];

    // Fill in the current UTC time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = currentDate.toUTCString();
});