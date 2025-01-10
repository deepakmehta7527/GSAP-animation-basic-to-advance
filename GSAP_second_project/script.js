// Animating the circle in page1 when it appears
gsap.from("#page1 #circle", {
  scale: 0,              // Starts the circle at scale 0 (invisible, completely shrunk)
  delay: 1,              // Adds a delay of 1 second before starting the animation
  duration: 2,           // The animation lasts for 2 seconds
  rotate: 720            // Rotates the circle by 720 degrees during the animation (full rotation twice)
});

// Animating the circle in page2 when the user scrolls
gsap.from("#page2 #circle", {
  scale: 0,              // Starts the circle at scale 0 (invisible, completely shrunk)
  duration: 2,           // The animation lasts for 2 seconds
  rotate: 720,           // Rotates the circle by 720 degrees during the animation (full rotation twice)

  // ScrollTrigger configuration for scroll-based animation
  scrollTrigger: {
    trigger: "#page2 #circle",  // The animation will be triggered when the circle in page2 comes into view
    scroller: "body",           // ScrollTrigger will use the whole body of the document for scrolling detection
    markers: true,              // Show the start and end markers for debugging (visible on the screen)
    start: "top 60%",           // The animation starts when the top of the circle reaches 60% of the viewport height
    end: "top 30%",             // The animation ends when the top of the circle reaches 30% of the viewport height
    scrub: true                 // The animation progress will match the scroll position (smooth animation based on scrolling)
  }
});
