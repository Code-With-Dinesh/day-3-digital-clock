function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 -> 12

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("clock").textContent = time;

  // Date
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = now.toLocaleDateString(undefined, options);

  document.getElementById("date").textContent = date;
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

// Default dark mode
document.body.classList.add("dark");

setInterval(updateClock, 1000);
updateClock();
