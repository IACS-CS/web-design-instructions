/* Sidebar */

/* Toggle code */
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  var toggle = document.getElementById("sidebar-toggle");
  toggle.classList.toggle("active");
}

/* focus brings to top */
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar_wrap");

  // Function to increase z-index
  function increaseZIndex() {
    sidebar.style.zIndex = "1000"; // or any high value
  }

  // Function to reset z-index
  function resetZIndex() {
    sidebar.style.zIndex = ""; // resets to the original value
  }

  // Listen for when the sidebar gains focus
  sidebar.addEventListener("focusin", increaseZIndex);

  // Listen for when the sidebar loses focus
  sidebar.addEventListener("focusout", resetZIndex);
});

/* Responsive sizing */
function updateSidebarStatus() {
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("sidebar-toggle");
  var minWidthForSidebar = 1090; // px

  if (window.innerWidth >= minWidthForSidebar) {
    // Screen is wide enough, activate sidebar
    sidebar.classList.add("active");
    toggle.classList.add("active");
  } else {
    // Screen is too small, deactivate sidebar
    sidebar.classList.remove("active");
    toggle.classList.remove("active");
  }
}

// Add an event listener for window resize
window.addEventListener("resize", updateSidebarStatus);

// Run when the page loads
document.addEventListener("DOMContentLoaded", updateSidebarStatus);
