// src/components/HomeCourses/dummydata.js
import HC1 from "../assets/HC1.png";
import HC2 from "../assets/HC2.png";
import HC3 from "../assets/HC3.png";
import HC4 from "../assets/HC4.png";
import HC5 from "../assets/HC5.png";
import HC6 from "../assets/HC6.png";
import HC7 from "../assets/HC7.png";
import HC8 from "../assets/HC8.png";

const courses = [
  {
    id: 10,
    name: "Software Development ",
    teacher: "John Smith",
    image: HC2,
    rating: 4.8,
    category: "Development",
    price: null, // FREE COURSE
    isFree: true,
    overview: "Complete web development course covering HTML, CSS, JavaScript, and modern deployment practices. Learn to build responsive, accessible websites and deploy them to production. Perfect for beginners starting their web development journey.",
    lectures: [
      {
        id: "2-1",
        title: "HTML & Semantics",
        durationMin: 25,
        chapters: [
          { id: "2-1-1", name: "HTML Basics", topic: "Tags & structure", durationMin: 10, videoUrl: "https://youtu.be/4eGJp3LBLIA" },
          { id: "2-1-2", name: "Forms & Accessibility", topic: "Forms, ARIA", durationMin: 15, videoUrl: "https://youtu.be/sDoiClRyV_c" }
        ]
      },
      {
        id: "2-2",
        title: "CSS Layouts",
        durationMin: 40,
        chapters: [
          { id: "2-2-1", name: "Flexbox", topic: "Layouts", durationMin: 20, videoUrl: "https://youtu.be/JGwfuuyJX5E" },
          { id: "2-2-2", name: "Grid", topic: "Advanced layouts", durationMin: 20, videoUrl: "https://youtu.be/_EiO98jSAb8" }
        ]
      },
      {
        id: "2-3",
        title: "Deploy & Hosting",
        durationMin: 20,
        chapters: [
          { id: "2-3-1", name: "Netlify & Vercel", topic: "Deploy flow", durationMin: 10, videoUrl: "https://youtu.be/Fm_wxwEChCk" },
          { id: "2-3-2", name: "Domain & SSL", topic: "DNS basics", durationMin: 10, videoUrl: "https://youtu.be/4eGJp3LBLIA" }
        ]
      }
    ]
  },

  {
    id: 13,
    name: "Data Analysis ",
    teacher: "Dr. Emily Wilson",
    image: HC5,
    rating: 4.6,
    category: "Data Science",
    price: null, // FREE COURSE
    overview: "Introduction to data science with Python. Learn data manipulation with pandas, statistical analysis, data visualization, and basic machine learning concepts. Perfect for beginners interested in data analysis and business intelligence.",
    lectures: [
      {
        id: "5-1",
        title: "Python for Data",
        durationMin: 40,
        chapters: [
          { id: "5-1-1", name: "Numpy & Pandas", topic: "Data handling", durationMin: 20, videoUrl: "https://youtu.be/sDoiClRyV_c" },
          { id: "5-1-2", name: "Visualization", topic: "Matplotlib & Seaborn", durationMin: 20, videoUrl: "https://youtu.be/JGwfuuyJX5E" }
        ]
      },
      {
        id: "5-2",
        title: "Statistics",
        durationMin: 30,
        chapters: [
          { id: "5-2-1", name: "Descriptive stats", topic: "mean/median/var", durationMin: 15, videoUrl: "https://youtu.be/_EiO98jSAb8" },
          { id: "5-2-2", name: "Inferential stats", topic: "hypothesis testing", durationMin: 15, videoUrl: "https://youtu.be/Fm_wxwEChCk" }
        ]
      }
    ]
  },
];

export const getCourseById = (id) => courses.find((c) => c.id === id);

export default courses;