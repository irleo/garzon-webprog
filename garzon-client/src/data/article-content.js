import article1 from "../assets/images/article1.jpg";
import article2 from "../assets/images/article2.jpg";
import article3 from "../assets/images/article3.jpg";
import article4 from "../assets/images/article4.jpg";

const articles = [
  {
    name: "getting-started-with-web-development",
    title: "Getting Started with Web Development",
    image: article1,
    content: [
      "Web development is the process of building websites and web applications for the internet. It often begins with understanding the core technologies: HTML for structure, CSS for styling, and JavaScript for interactivity.",
      "Learning these three fundamentals gives you a strong base for creating responsive and functional websites.",
      "This topic is important for beginners because it introduces the foundation of how modern websites are built and maintained.",
      "Example:\nA basic web page usually starts with HTML content, is styled with CSS, and becomes interactive through JavaScript."
    ]
  },
  {
    name: "introduction-to-react",
    title: "Introduction to React",
    image: article2,
    content: [
      "React is a JavaScript library used to build interactive user interfaces through reusable components.",
      "It helps developers organize UI into smaller parts, making applications easier to manage and scale.",
      "Core React concepts include components, props, and state, which work together to create dynamic front-end experiences.",
      "Example:\nA React component can display content, accept data through props, and update the interface when state changes."
    ]
  },
  {
    name: "using-tailwind-css-for-styling",
    title: "Using Tailwind CSS for Styling",
    image: article3,
    content: [
      "Tailwind CSS is a utility-first CSS framework that allows developers to style websites directly in their markup using predefined classes.",
      "It speeds up development by reducing the need to write custom CSS for common layout, spacing, typography, and color styles.",
      "Tailwind is especially useful for building clean and consistent interfaces quickly across different screen sizes.",
      "Example:\nA class like 'text-center p-4 bg-zinc-100' can handle alignment, spacing, and background styling in one place."
    ]
  },
  {
    name: "building-a-responsive-navbar",
    title: "Building a Responsive Navbar",
    image: article4,
    content: [
      "A responsive navbar adapts to different screen sizes so users can navigate easily on desktop, tablet, and mobile devices.",
      "Modern navbars often use flexible layouts, toggle buttons, and mobile-friendly menus to improve usability.",
      "Using React and Tailwind CSS together makes it easier to build navigation components that are both interactive and visually consistent.",
      "Example:\nA navbar may show full links on larger screens and switch to a menu button on smaller devices."
    ]
  }
];

export default articles;