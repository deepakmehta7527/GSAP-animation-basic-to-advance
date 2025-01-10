// Basic GSAP Animation: Moves an element from its initial to final point
gsap.to("#box", {
  x: 1000,       // Moves the element 1000px along the x-axis (to the right)
  rotate: 360,   // Rotates the element 360 degrees
  duration: 2,   // Animation lasts for 2 seconds
  delay: 1       // Starts the animation after a delay of 1 second
});

// Basic GSAP Animation: Moves an element from a specified position to its original position
gsap.from("#box", {
  x: 1000,       // Starts from 1000px along the x-axis
  rotate: 360,   // Starts with a 360-degree rotation
  duration: 1.5, // Animation lasts for 1.5 seconds
  delay: 1       // Starts the animation after a delay of 1 second
});




// Using GSAP's Timeline feature to chain multiple animations sequentially
var t1 = gsap.timeline(); // Create a new GSAP timeline instance

// First animation in the timeline: Moves #box1
t1.to("#box1", {
  x: 1000,       // Moves the element 1000px along the x-axis
  rotate: 360,   // Rotates the element 360 degrees
  scale: 0.5,    // Scales the element down to 50% of its original size
  duration: 2,   // Animation lasts for 2 seconds
  delay: 1       // Starts the animation after a delay of 1 second
});

// Second animation in the timeline: Moves #box2
t1.to("#box2", {
  x: 1000,       // Moves the element 1000px along the x-axis
  rotate: 360,   // Rotates the element 360 degrees
  scale: 0.5,    // Scales the element down to 50% of its original size
  duration: 1    // Animation lasts for 1 second
});

// Third animation in the timeline: Moves #box3
t1.to("#box3", {
  x: 1000,       // Moves the element 1000px along the x-axis
  rotate: 360,   // Rotates the element 360 degrees
  scale: 0.5,    // Scales the element down to 50% of its original size
  duration: 1    // Animation lasts for 1 second
});
