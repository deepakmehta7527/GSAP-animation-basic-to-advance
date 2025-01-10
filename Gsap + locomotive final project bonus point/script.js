// Function to manipulate the text content of all <h1> elements inside #page2
function Document() {
  // Select all <h1> elements within the #page2 container
  var allh1 = document.querySelectorAll('#page2 h1');

  // Loop through each <h1> element
  allh1.forEach(function(elem) {
    var clutter = ""; // To store the modified HTML for the current <h1>
    var h1text = elem.textContent; // Get the text content of the current <h1>
    var splittedText = h1text.split(""); // Split the text into individual characters

    // Loop through each character and wrap it in a <span> tag
    splittedText.forEach(function(e) {
      clutter += `<span>${e}</span>`; // Append the character wrapped in <span> to clutter
    });

    // Replace the original text of the <h1> with the new HTML containing <span> tags
    elem.innerHTML = clutter;
  });
}

// Function to initialize smooth scrolling and integrate it with GSAP's ScrollTrigger
function Scrolling() {
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin for GSAP

  // Initialize Locomotive Scroll for smooth scrolling
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"), // The container to apply smooth scrolling
    smooth: true // Enable smooth scrolling
  });

  // Synchronize Locomotive Scroll updates with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  // Proxy methods for ScrollTrigger to work with Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      // If a value is provided, scroll to it; otherwise, return the current scroll position
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    // Provide bounding box information for the scrolling container
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // Determine the pin type based on the container's transform style
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Refresh Locomotive Scroll whenever ScrollTrigger updates
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Refresh ScrollTrigger and Locomotive Scroll to ensure proper setup
  ScrollTrigger.refresh();
}

// Function to animate <h1> elements inside #page2 during scroll
function loading() {
  gsap.to("#page2 h1 span", { // Target all <span> elements inside #page2 h1
    color: "#E3E3C4", // Change the text color during the animation
    stagger: 0.1, // Apply a delay between animations of consecutive <span> elements
    scrollTrigger: { // Define ScrollTrigger settings
      trigger: "#page2 h1", // Element that triggers the animation
      scroller: "#main", // Specify the scroll container for Locomotive Scroll
      markers: true, // Enable visual markers for debugging (start, end, etc.)
      start: "top 40%", // Start the animation when the trigger is 40% from the top of the viewport
      end: "top -20%", // End the animation when the trigger reaches -20% from the top of the viewport
      scrub: 2, // Smoothly scrub the animation based on scroll position
    }
  });
}

// Execute all functions in sequence
Document(); // Modify <h1> text into individual <span> characters
Scrolling(); // Initialize smooth scrolling and ScrollTrigger integration
loading(); // Set up scroll-based animations for <h1> elements
