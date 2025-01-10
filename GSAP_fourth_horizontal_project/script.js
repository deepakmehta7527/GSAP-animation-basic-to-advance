// GSAP animation to move the <h1> inside the #page2 element
gsap.to("#page2 h1", {
  transform: "translateX(-125%)",  // Move the <h1> element horizontally to the left by 125% of its width

  // scrollTrigger is used to trigger the animation based on the scroll position
  scrollTrigger: {

    // 'trigger' is the element that triggers the animation when it enters the viewport
    trigger: "#page2",  // The animation starts when #page2 comes into the viewport

    // 'scroller' specifies the container that tracks the scroll position for triggering
    scroller: "body",  // The scroll event will be tied to the entire body of the page

    // 'markers' enables the display of start and end markers to help visualize the animation's scroll trigger
    markers: true,  // Markers are set to 'true' for debugging, showing where the animation starts and ends

    // 'start' defines the scroll position when the animation should begin
    // "top 0" means the animation starts when the top of #page2 reaches the top of the viewport (the screen)
    start: "top 0",

    // 'end' defines the scroll position when the animation should end
    // "top -100%" means the animation ends when the top of #page2 is fully off the viewport
    end: "top -100%",

    // 'scrub' smooths the animation based on the scroll position
    // A scrub value of 2 means the animation follows the scroll but with a slight delay
    scrub: 2,  // Creates smooth, scroll-based animation where the movement is linked to the scroll

    // 'pin' ensures that the #page2 element is fixed in place during the scroll-triggered animation
    pin: true  // Pins the #page2 element so it stays in place while the scroll-triggered animation is active
  }
});
