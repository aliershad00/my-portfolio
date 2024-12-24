


const particlesOptions = {
  background: {
    color: {
      value: '#1d1d1d', // Background color of the particles container
    },
  },
  fpsLimit: 120, // Maximum frames per second for the animation
  interactivity: {
    events: {
      onClick: {
        enable: true, // Enable the click event
        mode: 'push', // Mode for particles when clicked; 'push' adds new particles
      },
      onHover: {
        enable: true, // Enable the hover event
        mode: 'repulse', // Mode for particles when hovered over; 'repulse' moves particles away
      },
      resize: true, // Enable resizing of particles on window resize
    },
    modes: {
      push: {
        quantity: 4, // Number of particles added on click
      },
      repulse: {
        distance: 200, // Distance particles move away when hovered
        duration: 0.4, // Duration of the repulsion effect
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff', // Color of the particles
    },
    links: {
      color: '#ffffff', // Color of the links between particles
      distance: 150, // Maximum distance between linked particles
      enable: true, // Enable links between particles
      opacity: 0.5, // Opacity of the links
      width: 1, // Width of the links
    },
    collisions: {
      enable: true, // Enable collisions between particles
    },
    move: {
      direction: 'none', // Direction in which particles move (none means random directions)
      enable: true, // Enable particle movement
      outModes: {
        default: 'bounce', // Default behavior when particles hit the edge; 'bounce' makes them bounce back
      },
      random: false, // Disable random movement
      speed: 6, // Speed of the particles
      straight: false, // Disable straight movement
    },
    number: {
      density: {
        enable: true, // Enable particle density calculation
        area: 800, // Area in which particle density is calculated
      },
      value: 80, // Number of particles
    },
    opacity: {
      value: 0.5, // Opacity of the particles
    },
    shape: {
      type: 'circle', // Shape of the particles
    },
    size: {
      value: { min: 1, max: 5 }, // Size range of the particles
    },
  },
  detectRetina: true, // Enable retina display support (for high-resolution screens)
};

export default particlesOptions;
