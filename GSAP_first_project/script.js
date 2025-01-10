// Create a GSAP timeline instance.
// A timeline allows animations to play sequentially, ensuring smooth transitions.
let t1 = gsap.timeline();

////////////////////////////
// Animation 1: Navigation //
////////////////////////////

// Animate the <h3> elements inside the #nav container.
// Using `from` makes the animation start from a specific state and move to the default (CSS-defined) state.
t1.from("#nav h3", {
  y: -50,            // Start with the element moved 50px upwards.
  opacity: 0,        // Start with the element being invisible (opacity = 0).
  delay: 0.4,        // Wait 0.4 seconds before starting this animation.
  duration: 0.8,     // Animation lasts for 0.8 seconds.
  stagger: 0.4,      // Each <h3> element animates in sequence with a delay of 0.4 seconds between them.
});

////////////////////////////////
// Animation 2: Headings (h1) //
////////////////////////////////

// Animate the <h1> elements inside the #main container.
t1.from("#main h1", {
  x: -500,           // Start with the element moved 500px to the left.
  opacity: 0,        // Start with the element being invisible.
  duration: 0.8,     // Each animation lasts for 0.8 seconds.
  stagger: 0.4,      // Each <h1> element animates in sequence with a delay of 0.4 seconds.
});

/////////////////////////
// Animation 3: Images //
/////////////////////////

// Animate all <img> elements on the page.
t1.from("img", {
  x: 100,            // Start with the image moved 100px to the right.
  rotate: 45,        // Start with the image rotated by 45 degrees.
  opacity: 0,        // Start with the image being invisible.
  duration: 0.8,     // Each animation lasts for 0.8 seconds.
  stagger: 0.8       // Each <img> animates in sequence with a delay of 0.8 seconds between them.
});
