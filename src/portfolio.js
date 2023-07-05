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
  username: "Raj Shah",
  title: "Hi all, I'm Raj",
  subTitle: emoji(
    "A passionate Data Analyst and Backend Developer 🚀 having an experience of building and analysing multiple Web and Mobile products with SQL / Nodejs / Golang / PowerBI / Excel / Mongodb and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cC2dvzEczx3lrnwlvdrnR_9a4rgm9jzC/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Raj-Shah1",
  linkedin: "https://www.linkedin.com/in/raj-shah-1b6736161/",
  gmail: "rajshah0211@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ANALYST AND BACKEND DEVELOPER WHO CRAFTS ROBUST SOLUTIONS USING DIVERSE TECH STACKS",
  skills: [
    emoji(
      "⚡ Analyse and develop highly interactive visualisations for your data"
    ),
    emoji(
      "- Transform and analyse data using SQL, Nodejs, Python, Excel, Azure Services, Redshift"
    ),
    emoji(
      "- Visualise data using PowerBI, Metabase, Excel, SQL tools"
    ),
    emoji("⚡ Built application logic, databases, API and its integration as a Backend Developer"),
    emoji(
      "- Worked on Thursday, a remote culture building app, using Golang, Python, Redshift, and some more cool libraries and frameworks"
    ),
    emoji(
      "- Worked on Jam, a Web3 Social Media Platform, using Golang, Mongodb, Weaviate, GraphQL and some more tools"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "golang",
    //   fontAwesomeClassname: "fab fa-golang"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Visualisations",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "True Sparrow",
      companylogo: require("./assets/images/truesparrowLogo.png"),
      date: "April 2022 – Present",
      desc: "Worked on Thursday, a remote culture building platform for teams and Jam, a Web3 Social Media Platform",
      descBullets: [
        "Analyzed data for Thursday using PostgreSQL and visuals using Metabase",
        "Built APIs, databases for Thursday and Jam using Golang, Python, Mongodb, Redshift"
      ]
    },
    {
      role: "Business Intelligence Engineer",
      company: "Moxie",
      companylogo: require("./assets/images/moxieLogo.png"),
      date: "October 2020 – March 2022",
      desc: "Analyzed, transformed and visualised Customer, Sales, Marketing data for Moxie using SQL, Excel, Nodejs, Metabase and more",
    },
    {
      role: "Software Engineer",
      company: "MAQ Software",
      companylogo: require("./assets/images/maqLogo.png"),
      date: "Jan 2020 – Sep 2020",
      desc: "Worked as an Analyst to fetch and extract data from multiple cloud sources, transforming and generating business insights using SQL, PowerBI, Azure Data Factory, Azure Databricks and more",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "Microsoft Exam 761: Querying Data with Transact-SQL",
      subtitle:
        "Microsoft Exam 761: Querying Data with Transact-SQL using SQL, T-SQL, Database Development",
      image: require("./assets/images/tsql.png"),
      imageAlt: "Transact-SQL Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/dc5513c0-5a3a-4a59-9288-a40e1b0a73d1/linked_in_profile"
        }
      ]
    },
    {
      title: "Power BI Data Analyst",
      subtitle:
        "Microsoft Certified: Power BI Data Analyst Associate using Azure, SQL, Power BI and Power Platform",
      image: require("./assets/images/powerBI.png"),
      imageAlt: "Power BI Data Analyst Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c45f2fbc-db35-4858-8a45-bc892eba3499"
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9016285013",
  email_address: "rajshah0211@gmail.com"
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
  isHireable
};
