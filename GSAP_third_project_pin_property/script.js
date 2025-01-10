// GSAP animation to scale the image in the #page2 section
gsap.to("#page2 img", {
  width: "100%", // The target property to animate: changes the width of the image to 100% (full width of its container)

  scrollTrigger: { // Initialize ScrollTrigger for scroll-based animations
    trigger: "#page2", // The element that will trigger the animation when it comes into view (in this case, #page2)
    scroller: "body", // Specifies the scroll container (in this case, the entire body of the document)

    markers: true, // This will show markers on the page to visualize where the animation starts and ends (useful for debugging)

    start: "top 0", // Defines the start position of the animation. "top 0" means the animation starts when the top of #page2 hits the top of the viewport (browser window)

    end: "top -100%", // Defines the end position of the animation. "top -100%" means the animation ends when the top of #page2 is 100% above the top of the viewport
    scrub: 2, // Makes the animation scrubbed (synchronized) to the scroll position. The value 2 makes the animation smoother, following the scroll but with a slight delay.

    pin: true // This will pin #page2 in place while the scroll animation is active, so it stays fixed during the scroll-triggered animation
  }
});
