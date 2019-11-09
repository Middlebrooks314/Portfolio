$(document).ready(function() {
  $("#slides").superslides({
    // image at top of the page with fade and change every 5s. And removes pagination dots to switch to the buttons
    animation: "fade",
    play: 5000,
    pagination: false
  });

  let typed = new Typed(".typed", {
    strings: [
      "Fullstack Developer.",
      "Software Engineer.",
      "Knowledge Seeker."
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
    
  });
  
});
