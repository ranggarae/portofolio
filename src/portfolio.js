/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rochmat Anggara",
  title: "Hi there, I'm Angga",
  subTitle: emoji(
    "A passionate Full Stack Developer. I love creating modern, responsive web applications and exploring new technologies. A fast learner who’s always excited to grow and build something amazing!"
  ),
  
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ranggarae",
  linkedin: "https://www.linkedin.com/in/ranggara/",
  gmail: "anggararochmat@gmail.com",
  whatsapp: "https://wa.me/6285714243947",
  instagram: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Build responsive and interactive Web Applications using modern front-end and back-end technologies"),
    emoji("⚡ Develop Full Stack projects integrating databases and APIs with clean and maintainable code"),
    emoji("⚡ Design efficient UI/UX experiences using Figma and implement them with React and Bootstrap"),
    emoji("⚡ Collaborate and problem-solve to deliver optimized, user-centered digital solutions"),
    emoji("⚡ Continuously learn and explore new tools and frameworks to improve development workflows")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gunadarma University",
      logo: require("./assets/images/gundar-logo.png"),
      subHeader: "Bachelor’s Degree in Information Systems ",
      duration: "September 2017 - June 2024",
      thesis: "Thesis : Application for Introduction of Ultralight Hiking Techniques Using Kodular Based on Android.",
      desc: "Relevant Coursework",
      descBullets: [
        "Database Systems",
        "Web Development",
        "HTML",
        "Javascript",
        "Python"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my featured works that showcase my journey as a Full Stack Developer",
  projects: [
    {
      image: require("./assets/images/chill.png"),
      projectName: "Chill Web App",
      projectDesc: "A responsive movie website built during my Full Stack Developer bootcamp at Harisenin. Developed using HTML, CSS, and JavaScript, featuring movie listings, search functionality, and a clean user interface.",
      footerLink: [
        {
          name: "Demo",
          url: "https://chillwebapp-ranggarae-anggas-projects-95d455b9.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ulhiking.png"),
      projectName: "Ultralight Hiking App",
      projectDesc: "An Android application developed as part of my university thesis, introducing ultralight hiking techniques. Built using Kodular, focused on delivering informative content and user-friendly design for outdoor enthusiasts.",
      footerLink: [
        {
          name: "Apk",
          url: "https://drive.google.com/file/d/1SWhDFZKNfWbsdeqadekDuhYKFDozxS9K/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "A showcase of my formal training, bootcamps, and achievements to validate my skills",

  achievementsCards: [
    {
      title: "Full Stack Developer Bootcamp",
      subtitle:
        "Successfully completed an intensive, hands-on bootcamp from harisenin.com, specializing in the end-to-end technologies and methodologies of modern Full Stack Development.",
      image: require("./assets/images/rise.png"),
      imageAlt: "FSD Bootcamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14S2j7OXSB-HLH5glsi7IZRzs41NcnjVi/view?usp=sharing"
        }
      ]
    },
    {
      title: "English Proficiency (TOEFL PBT)",
      subtitle:
        "Achieved a high-proficiency score of 573 on the TOEFL PBT (Prediction) test, demonstrating a strong command of English suitable for professional and academic environments.",
      image: require("./assets/images/toefl.png"),
      imageAlt: "TOEFL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PMqNjKwmFabaJ5zP95L7IoQKj9m6ai8L/view?usp=sharing"
        }
      ]
    },

    {
      title: "C# Project",
      subtitle: "Completed a project-based training program from Gunadarma University, focusing on the practical application of C# to build and deliver a complete software project.",
      image: require("./assets/images/gundar-logo.png"),
      imageAlt: "C# Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CxSeI5z7sdZthGkbkv7gTVjFwdETVKQ0/view?usp=sharing"
        }
      ]
    },

    {
      title: "Go-Lang for Intermediate",
      subtitle: "Finished a specialized training course covering intermediate-level concepts and advanced techniques in the Go programming language (Go-Lang), enhancing backend development skills.",
      image: require("./assets/images/gundar-logo.png"),
      imageAlt: "Go-lang Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oJwlnScc-3LA8T1Mr0patIrsR8NZHvZ7/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    `Whether it’s a new project, an idea, or just a quick hello — my inbox is always open!  
I’m always excited to connect, collaborate, and explore new possibilities in tech.  
Drop me a message anytime 👇`,
  number: "+62 857 1424 3947",
  email_address: "anggararochmat@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
