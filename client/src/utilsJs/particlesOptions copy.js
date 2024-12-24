// src/particlesOptions.js

const particlesOptions = {
  background: {
    color: {
      value: '#1x1d1x',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.2,
      },
    },
  },
  particles: {
    color: {
      value: '#ff00ff',
    },
    links: {
      color: '#00ff00',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default particlesOptions;
