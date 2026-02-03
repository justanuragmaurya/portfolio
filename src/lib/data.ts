export const personalInfo: PersonalInfo = {
  name: "Anurag",
  greeting: "Hey there,",
  title: "I'm a MVP builder and full-stack developer, turning ideas into production-ready products—handling everything from concept to deployment with a complete modern tech stack.",
  email: "contact@anuragmaurya.com",
  image: "/anurag.png",
  resumeLink: "https://thumbnaily-storage.s3.ap-south-1.amazonaws.com/thumbnails/uploads/anuragmaurya.pdf"
};

export const socialLinks: SocialLinks = {
  twitter: "https://x.com/intent/follow?screen_name=codeanuragg",
  github: "https://github.com/justanuragmaurya/",
  linkedin: "https://www.linkedin.com/in/realanuragmaurya/",
  email: "contact@anuragmaurya.com",
  meetingLink: "/meet"
};

export const skills: string[] = [
  "JavaScript",
  "TypeScript", 
  "Next.js",
  "Docker",
  "React",
  "Prisma",
  "AWS",
  "Redux",
  "MongoDB",
  "Tailwind CSS",
  "PostgresQL",
  "Supabase",
  "Node.js",
  "Express.js",
  "Git",
  "MySQL",
  "Turborepo"
];

export const education: EducationItem[] = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech CSE with specialization in AI and ML",
    duration: "Graduating in May 2027",
    logo: "/lpulogo.jpg",
    logoClassName: "rounded-full"
  },
  {
    institution: "Army Public School",
    degree: "1st to 12th Standard",
    duration: "Graduated in March 2023",
    logo: "/apslogo.png",
    logoClassName: ""
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "Hairiyapa",
    position: "Fullstack Developer Intern",
    duration: "Oct 2024 - Dec 2024",
    logo: "/hlogo.svg",
    logoClassName: "rounded-full dark:invert"
  }
];

export const contactForm: ContactForm = {
  title: "Contact Me",
  emailLabel: "Your Email:",
  emailPlaceholder: "Enter your email here.",
  messageLabel: "Your Message:",
  messagePlaceholder: "Enter your message here.",
  sendButton: "Send",
  sendingButton: "Sending message..."
};

export { Projects } from './projects';

export const footerInfo: FooterInfo = {
  designerName: "Anurag Maurya",
  designerLink: "https://x.com/intent/follow?screen_name=codeanuragg"
};

export const githubActivity: GithubActivity = {
  title: "Github Contributions",
  username: "justanuragmaurya",
  profileUrl: "https://github.com/justanuragmaurya",
  blockMargin: 3
};

const data = {
  personalInfo,
  socialLinks,
  skills,
  education,
  experience,
  contactForm,
  footerInfo,
  githubActivity
};
export default data; 

export interface PersonalInfo {
  name: string;
  greeting: string;
  title: string;
  email: string;
  image: string;
  resumeLink: string;
}

export interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  email: string;
  meetingLink: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  logo: string;
  logoClassName: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  logo: string;
  logoClassName: string;
}

export interface ContactForm {
  title: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendButton: string;
  sendingButton: string;
}

export interface FooterInfo {
  designerName: string;
  designerLink: string;
}

export interface GithubActivity {
  title: string;
  username: string;
  profileUrl: string;
  blockMargin: number;
}
