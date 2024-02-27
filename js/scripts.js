const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".darkLight"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

// Function to set mode based on time
function setModeBasedOnTime() {
  const timeNow = new Date();
  const currentHour = timeNow.getHours();
  // Check if it's between 07:00-18:00 for light mode, otherwise dark mode
  if (currentHour >= 7 && currentHour < 18) {
    if (!body.classList.contains("dark")) {
      // It's already in light mode, do nothing
    } else {
      body.classList.remove("dark"); // Change to light mode
      localStorage.setItem("mode", "light-mode");
    }
  } else {
    if (body.classList.contains("dark")) {
      // It's already in dark mode, do nothing
    } else {
      body.classList.add("dark"); // Change to dark mode
      localStorage.setItem("mode", "dark-mode");
    }
  }
}

// Function to initialize the mode
function initializeMode() {
  let getMode = localStorage.getItem("mode");
  // If user has a preference, use that
  if (getMode) {
    if (getMode === "dark-mode") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  } else {
    // No user preference, use time-based setting
    setModeBasedOnTime();
  }
}

// js code to toggle dark and light mode manually
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

// Initialize mode on page load
initializeMode();

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!mybutton) return;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
