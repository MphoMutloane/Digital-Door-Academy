// src/dummydata.js
import HC1 from "../assets/HC1.png";
import HC2 from "../assets/HC2.png";
import HC3 from "../assets/HC3.png";
import HC4 from "../assets/HC4.png";
import HC5 from "../assets/HC5.png";
import HC6 from "../assets/HC6.png";
import HC7 from "../assets/HC7.png";
import HC8 from "../assets/HC8.png";

export const coursesData = [
  {
    id: 1,
    name: "React Masterclass",
    teacher: "John doe",
    image: HC1,
    rating: 4.8,
    isFree: false,
    price: null,
    overview: "Master React from fundamentals to advanced patterns. Learn hooks, state management, performance optimization, and real-world project architecture. Build scalable applications with modern React ecosystem tools and best practices used by top tech companies.",
    lectures: [
      {
        id: "1-1",
        title: "Intro & Setup",
        durationMin: 12,
        chapters: [
          { id: "1-1-1", name: "Course intro", topic: "What we'll build", durationMin: 4, videoUrl: "https://drive.google.com/file/d/1LsVJM1CquQtmp8fJX91oskMx1TjlplLJ/view?usp=drive_link" },
          { id: "1-1-2", name: "Environment", topic: "Node, npm, editor setup", durationMin: 8, videoUrl: "https://youtu.be/4eGJp3LBLIA?si=9t7IQ-gDqbUR0SAw" }
        ]
      },
      {
        id: "1-2",
        title: "JSX & Components",
        durationMin: 30,
        chapters: [
          { id: "1-2-1", name: "JSX basics", topic: "Syntax & expressions", durationMin: 10, videoUrl: "https://youtu.be/JGwfuuyJX5E?si=UB5xSzIr3G7P5uaA" },
          { id: "1-2-2", name: "Functional components", topic: "Props & composition", durationMin: 10, videoUrl: "https://youtu.be/_EiO98jSAb8?si=RApm9kuU8Ud1hY7a" },
          { id: "1-2-3", name: "Styling components", topic: "CSS modules & Tailwind", durationMin: 10, videoUrl: "https://youtu.be/Fm_wxwEChCk?si=3lekkBDLHldxjWKV" }
        ]
      },
      {
        id: "1-3",
        title: "State & Hooks",
        durationMin: 46,
        chapters: [
          { id: "1-3-1", name: "useState", topic: "Local state patterns", durationMin: 12, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" },
          { id: "1-3-2", name: "useEffect", topic: "Side effects & cleanup", durationMin: 12, videoUrl: "https://youtu.be/JGwfuuyJX5E?si=UB5xSzIr3G7P5uaA" },
          { id: "1-3-3", name: "Custom hooks", topic: "Reusing logic", durationMin: 10, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" },
          { id: "1-3-4", name: "Performance hooks", topic: "useMemo & useCallback", durationMin: 12, videoUrl: "https://youtu.be/JGwfuuyJX5E?si=UB5xSzIr3G7P5uaA" }
        ]
      },
      {
        id: "1-4",
        title: "Routing & Data",
        durationMin: 34,
        chapters: [
          { id: "1-4-1", name: "React Router", topic: "Routes & params", durationMin: 12, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" },
          { id: "1-4-2", name: "Fetching data", topic: "fetch, axios & patterns", durationMin: 12, videoUrl: "https://youtu.be/JGwfuuyJX5E?si=UB5xSzIr3G7P5uaA" },
          { id: "1-4-3", name: "State management intro", topic: "Context vs libs", durationMin: 10, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" }
        ]
      }
    ]
  },

  {
    id: 2,
    name: "Frontend Crash Course",
    teacher: "John Doe",
    image: HC2,
    rating: 4.7,
    isFree: true,
    price: null,
    overview: "Accelerate your frontend development journey with HTML, CSS, and JavaScript fundamentals. Perfect for beginners starting their web development career. Learn responsive design, accessibility, and modern CSS techniques to build beautiful, functional websites.",
    lectures: [
      {
        id: "2-1",
        title: "HTML & Accessibility",
        durationMin: 26,
        chapters: [
          { id: "2-1-1", name: "Semantic HTML", topic: "Structure & a11y basics", durationMin: 12, videoUrl: "https://youtu.be/6BrpMJeZuvQ?si=AHhbSJobh3kntX6Y" },
          { id: "2-1-2", name: "Forms & Inputs", topic: "Validation & UX", durationMin: 14, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" }
        ]
      },
      {
        id: "2-2",
        title: "CSS Layouts & Responsive",
        durationMin: 44,
        chapters: [
          { id: "2-2-1", name: "Flexbox deep dive", topic: "Alignment & patterns", durationMin: 18, videoUrl: "https://youtu.be/6BrpMJeZuvQ?si=AHhbSJobh3kntX6Y" },
          { id: "2-2-2", name: "CSS Grid", topic: "Complex layouts", durationMin: 18, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" },
          { id: "2-2-3", name: "Responsive design", topic: "Media queries & mobile-first", durationMin: 8, videoUrl: "https://youtu.be/6BrpMJeZuvQ?si=AHhbSJobh3kntX6Y" }
        ]
      },
      {
        id: "2-3",
        title: "JavaScript Essentials",
        durationMin: 50,
        chapters: [
          { id: "2-3-1", name: "DOM & Events", topic: "Manipulation & listeners", durationMin: 15, videoUrl: "https://youtu.be/6BrpMJeZuvQ?si=AHhbSJobh3kntX6Y" },
          { id: "2-3-2", name: "ES6+", topic: "Let/const, arrow functions, modules", durationMin: 18, videoUrl: "https://www.youtube.com/watch?v=dpw9EHDh2bM" },
          { id: "2-3-3", name: "Tooling", topic: "Bundlers & npm scripts", durationMin: 17, videoUrl: "https://youtu.be/6BrpMJeZuvQ?si=AHhbSJobh3kntX6Y" }
        ]
      }
    ]
  },

];

export default coursesData;