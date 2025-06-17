import { easeInOut } from "framer-motion";

// Hero Section
const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: easeInOut,
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      }
    }
  }
};

export const socialIcons = [
  {
    id: 1,
    path: "M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.5 1.48-3.88 3.75-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.55v1.88h2.77l-.44 2.88h-2.33v7c4.78-.76 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z",
    viewBox: "0 0 24 24",
  },    
  {
    id: 2,
    path: "M12 .297C5.373.297 0 5.67 0 12.297c0 5.299 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.109-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.469-2.382 1.236-3.22-.124-.305-.535-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 013.003-.404c1.018.004 2.044.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.65.243 2.871.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.807 5.623-5.479 5.92.43.372.815 1.104.815 2.225 0 1.606-.014 2.898-.014 3.293 0 .32.19.694.801.576C20.565 22.09 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z",
    viewBox: "0 0 24 24",
  },  
  {
    id: 3,
    path: "M7.75 2h8.5C19.097 2 21 3.903 21 6.25v11.5C21 20.097 19.097 22 16.25 22h-8.5C4.903 22 3 20.097 3 17.75V6.25C3 3.903 4.903 2 7.75 2zm0 1.5C5.955 3.5 4.5 4.955 4.5 6.75v10.5c0 1.795 1.455 3.25 3.25 3.25h8.5c1.795 0 3.25-1.455 3.25-3.25V6.75c0-1.795-1.455-3.25-3.25-3.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
    viewBox: "0 0 24 24",
  },
  {
    id: 4,
    path: "M4.98 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zM2 8.75h5v12H2v-12zm7.5 0h4.3v1.7h.06c.6-1.1 2.05-2.25 4.18-2.25C21.8 8.5 24 10.25 24 13.94V21h-5v-6.5c0-1.53-.3-2.72-1.85-2.72-1.82 0-2.6 1.3-2.6 2.72V21h-4.1v-12z",
    viewBox: "0 0 24 24"
  },  
]

// Numbers Section

export const Numbers = [
  {id:1, number: 50, title: 'Created Projects'},
  {id:2, number: 30, title: 'UI/UX Projects'},
  {id:3, number: 1, title: 'Experience'},
  {id:4, number: 1, title: 'Worked Companies'},
]

// Services Section

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor'
  },
  {
    id: 2,
    title: 'UI / UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor'
  },
  {
    id: 3,
    title: 'Mobile Application Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor'
  },
];
