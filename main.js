const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

/*--------- js for preloader --------*/
function hidePreloader() {
  var preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
}

// Timeout duration in milliseconds (e.g., 5 seconds)
var timeoutDuration = 5000;

// Set timeout to hide the preloader after a certain duration
var timeout = setTimeout(hidePreloader, timeoutDuration);

// Optional: If you want to clear the timeout if the content loads before the timeout
window.addEventListener("load", function () {
  clearTimeout(timeout);
  hidePreloader();
});
