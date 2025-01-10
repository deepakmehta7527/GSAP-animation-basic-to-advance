// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll (a smooth scrolling library) on the "#main" element
// This provides smooth scrolling behavior for the entire page.
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // Targeting the "#main" element
  smooth: true // Enable smooth scrolling behavior
});

// Each time Locomotive Scroll updates (when the user scrolls),
// we tell ScrollTrigger to update too, to sync the scroll position.
locoScroll.on("scroll", ScrollTrigger.update);

// Set up the ScrollTrigger to use the proxy methods of Locomotive Scroll
// This ensures that Locomotive Scroll's scrolling behavior is integrated with ScrollTrigger's
// animations and triggers (since Locomotive Scroll hijacks the native scroll position).
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    // Get or set the scroll position. If the value is passed, scroll to that position using Locomotive Scroll's scrollTo method.
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    // Return the size and position of the scrolled container (for ScrollTrigger to work correctly).
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  // Pinning behavior for the scroll container: If there's a transform applied, pin using 'transform', otherwise use 'fixed'.
});

// After the page is refreshed or the window is resized, we should refresh ScrollTrigger
// and update Locomotive Scroll to adjust to any changes (like padding added for pinning).
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// Refresh ScrollTrigger and update Locomotive Scroll to ensure everything is aligned correctly.
// This may adjust things like padding, which might be added for pinning elements.
ScrollTrigger.refresh();

// GSAP animation for the first box on the first page (#page1 #box)
gsap.from("#page1 #box", {
  scale: 0, // Start with scale 0 (invisible)
  duration: 1, // Animation duration of 1 second
  delay: 1, // Delay the animation by 1 second
  opacity: 0, // Start with opacity 0 (invisible)
  rotate: 360, // Start with a 360-degree rotation
});

// GSAP animation for the second box on the second page (#page2 #box)
// The animation starts when the box enters the scroll viewport.
gsap.from("#page2 #box", {
  scale: 0, // Start with scale 0 (invisible)
  duration: 1, // Animation duration of 1 second
  opacity: 0, // Start with opacity 0 (invisible)
  rotate: 360, // Start with a 360-degree rotation
  scrollTrigger: {
    trigger: "#page2 #box", // The element that triggers the animation
    scroller: "#main", // The scroller to be used (targeting the "#main" element)
    start: "top 50", // When the top of the trigger element is 50% from the top of the viewport
    end: "top -100", // When the top of the trigger element is -100px from the top of the viewport
    markers: true, // Show markers for debugging the trigger points (for visualization purposes)
  },
});
