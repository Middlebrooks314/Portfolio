$(document).ready(function() {
  $("#slides").superslides({
    // image at top of the page with fade and change every 5s. And removes pagination dots to switch to the buttons
    animation: "fade",
    play: 5000,
    pagination: false
  });

  let typed = new Typed(".typed", {
    strings: ["Fullstack Developer.", "Software Engineer.", "Knowledge Seeker."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});
