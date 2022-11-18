/* Change this file to get your personal Porfolio */

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shubham",
  full_name: "Shubham Gupta",
  loops: [
    "Web Developer",
    10000,
    "React Practitioner",
    10000,
    "SoftWare Enginear",
    10000,
    "Life Long Learner",
    10000,
  ],
  subTitle:
    "I'm very passionate and dedicated to my work.I have acquired the skills and knowledge necessary to make your project a success. ",
  mail: "mailto:im.shubham3480@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/shubham348",
  linkedin: "https://www.linkedin.com/in/shubham-gupta-954132169/",
  gmail: "im.shubham3480@gmail.com",
};

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ With 3+ years experience as a professional developer",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "fa-brands fa-html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-brands fa-css3-alt",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fa-brands fa-js",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "fa-brands fa-react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "redux",
          type: "svg",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa-brands fa-node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "fa-brands fa-npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-brands fa-git-alt",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Material Ui",
          fontAwesomeClassname: "material-ui",
          type: "svg",
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "fa-brands fa-sass",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "tailwind",
          type: "svg",
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "HashStudioz Technologies Private Limited",
          company_url: "https://www.hashstudioz.com/",
          logo_path: "hashStudioz.jpeg",
          duration: "May 2021 - Present",
          location: "Noida",
          description: "Full time Web developer in React",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer",
          company: "Pibity",
          company_url: "#",
          logo_path: "pibity.jpeg",
          duration: "Nov 2019 - Apr 2021",
          location: "Greater Noida",
          description: "",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@vedanshvijay/",
    avatar_image_path: "blogs_image.svg",
  },
};

export { greeting, socialMediaLinks, skills, experience, contactPageData };
