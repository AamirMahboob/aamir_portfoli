import fleetImage from "../app/fleet.jpg";
import piqlaweb from "../app/piqlaweb.jpg";
import piqlaportal from "../app/piqlaportal.png";
import digicash from "../app/digicash.png";
import archiwiz from "../app/archiwizportal.webp";
import safesolution from "../app/safesolution.png";
import bactelem from "../app/bactelem.png";
import ledgerflow from "../app/ledgerflow.png";
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Service" },
  { href: "#contact", label: "Contact" },
];

export const heroTitles = [
  "A FULLSTACK DEVELOPER",
  "A NEXT.JS SPECIALIST",
  "A WEB3 BUILDER",
  "A UI/UX ENGINEER",
];

export const stats = [
  { num: 3, suffix: "+", label: "Years of Experience" },
  { num: 10, suffix: "+", label: "Completed Projects" },
  { num: 10, suffix: "+", label: "Happy Clients" },
];

export type TagType = "cyan" | "purple" | "amber";

export const projects = [
  {
    image: piqlaweb,
    gradient: "linear-gradient(135deg,#0d2137,#1a3a5c)",
    color: "#00d4ff",
    title: "Piqla Ride-hailing App Website",
    desc: "Mobile-first design with seamless UX and smooth animations.",
    tags: [
      { label: "Mobile", type: "cyan" as TagType },
      { label: "UI/UX", type: "purple" as TagType },
    ],
  },
  {
    image: piqlaportal,
    gradient: "linear-gradient(135deg,#0a1a1a,#103030)",
    color: "#06b6d4",
    title: "Piqla Admin Panel",
    desc: "Fully responsive admin panel for ride-hailing app management built with Next.js.",
    tags: [
      { label: "Next.js", type: "cyan" as TagType },
      { label: "Admin", type: "purple" as TagType },
    ],
  },
  {
    image: fleetImage,
    gradient: "linear-gradient(135deg,#0d2137,#1a3a5c)",
    color: "#00d4ff",
    title: "Fleet Management System Admin",
    desc: "Next.js-powered fleet management dashboard with real-time tracking and analytics.",
    tags: [
      { label: "Next.js", type: "cyan" as TagType },
      { label: "Admin", type: "purple" as TagType },
    ],
  },
  {
    image: digicash,
    gradient: "linear-gradient(135deg,#1a0a2e,#2d1654)",
    color: "#a855f7",
    title: "Digicash Admin Panel",
    desc: "Fully responsive admin panel for digicash management built with React.js.",
    tags: [
      { label: "React.js", type: "cyan" as TagType },
      { label: "Admin", type: "purple" as TagType },
    ],
  },
  {
    image: archiwiz,
    gradient: "linear-gradient(135deg,#0a2010,#1a4020)",
    color: "#22c55e",
    title: "Archiwiz Admin Panel",
    desc: "Fully responsive admin panel for archiwiz management built with React.js.",
    tags: [
      { label: "React.js", type: "cyan" as TagType },
      { label: "Admin", type: "purple" as TagType },
    ],
  },
  {
    image: safesolution,
    gradient: "linear-gradient(135deg,#1a1a0a,#3a3010)",
    color: "#f59e0b",
    title: "Safe Solution Portfolio Website",
    desc: "Modern portfolio website for Safe Solution with complex animations and data visualization components.",
    tags: [
      { label: "React.js", type: "cyan" as TagType },
      { label: "Portfolio", type: "amber" as TagType },
    ],
  },
  {
    image: bactelem,
    gradient: "linear-gradient(135deg,#1a0a0a,#3a1010)",
    color: "#ef4444",
    title: "Bactelemed Portfolio Website",
    desc: "Sleek, Tailwind CSS, fully responsive portfolio website for Bactelemed.",
    tags: [
      { label: "Next.js", type: "cyan" as TagType },
      { label: "Portfolio", type: "purple" as TagType },
    ],
  },
  {
    image: ledgerflow,
    gradient: "linear-gradient(135deg,#0a1a1a,#103030)",
    color: "#06b6d4",
    title: "Ledgerflow Portfolio Website",
    desc: "Sleek, fully responsive portfolio website for Ledgerflow built with Next.js.",
    tags: [
      { label: "React.js", type: "cyan" as TagType },
      { label: "Portfolio", type: "purple" as TagType },
    ],
  },
];

export const techs = [
  { icon: "⚛️", name: "React.js", sub: "Frontend", bg: "rgba(0,212,255,0.1)" },
  {
    icon: "▲",
    name: "Next.js",
    sub: "Framework",
    bg: "rgba(255,255,255,0.06)",
  },
  { icon: "🟢", name: "Node.js", sub: "Backend", bg: "rgba(34,197,94,0.1)" },
  { icon: "⚡", name: "Express.js", sub: "Backend", bg: "rgba(239,68,68,0.1)" },
  { icon: "🍃", name: "MongoDB", sub: "Database", bg: "rgba(34,197,94,0.1)" },
  { icon: "🐘", name: "Postgres", sub: "Database", bg: "rgba(6,182,212,0.1)" },
  { icon: "🔴", name: "Nest.js", sub: "Backend", bg: "rgba(239,68,68,0.1)" },
  { icon: "🔄", name: "Redux", sub: "State Mgmt", bg: "rgba(239,68,68,0.1)" },
  {
    icon: "🔷",
    name: "TypeScript",
    sub: "Language",
    bg: "rgba(59,130,246,0.1)",
  },
  {
    icon: "📜",
    name: "JavaScript",
    sub: "Language",
    bg: "rgba(245,158,11,0.1)",
  },
  {
    icon: "📱",
    name: "React Native",
    sub: "Mobile",
    bg: "rgba(0,212,255,0.1)",
  },
  { icon: "💳", name: "Stripe", sub: "Payments", bg: "rgba(124,58,237,0.1)" },
  { icon: "🔥", name: "Firebase", sub: "Backend", bg: "rgba(245,158,11,0.1)" },
  { icon: "🎨", name: "Figma", sub: "Design", bg: "rgba(255,255,255,0.06)" },
  {
    icon: "🐱",
    name: "GitHub",
    sub: "Version Control",
    bg: "rgba(255,255,255,0.06)",
  },
  { icon: "🔄", name: "CI/CD", sub: "DevOps", bg: "rgba(239,68,68,0.1)" },
  { icon: "🖼️", name: "Adobe XD", sub: "Design", bg: "rgba(6,182,212,0.1)" },
  { icon: "🏷️", name: "HTML5", sub: "Markup", bg: "rgba(245,158,11,0.1)" },
  { icon: "💅", name: "CSS3", sub: "Styling", bg: "rgba(59,130,246,0.1)" },
  {
    icon: "🌊",
    name: "Tailwind CSS",
    sub: "Styling",
    bg: "rgba(6,182,212,0.1)",
  },
  { icon: "🅱️", name: "Bootstrap", sub: "Styling", bg: "rgba(124,58,237,0.1)" },
  { icon: "☕", name: "Java", sub: "Language", bg: "rgba(255,255,255,0.06)" },
  { icon: "💲", name: "Sass", sub: "Styling", bg: "rgba(34,197,94,0.1)" },
  { icon: "🤖", name: "Chat GPT", sub: "AI Tools", bg: "rgba(0,212,255,0.1)" },
  {
    icon: "🎭",
    name: "Material UI",
    sub: "UI Library",
    bg: "rgba(59,130,246,0.1)",
  },
];

export const services = [
  {
    icon: "🚀",
    bg: "rgba(0,212,255,0.12)",
    title: "Next.js Full Stack Development",
    desc: "Next.js apps built with React & Node for modern, feature-rich dynamic web experiences and e-commerce solutions.",
    stack: ["Next.js", "React", "Node"],
  },
  {
    icon: "⚙️",
    bg: "rgba(124,58,237,0.12)",
    title: "Backend Development",
    desc: "Secure, performant APIs and microservices using Node.js, Nest.js, and modern frameworks with scalable architecture.",
    stack: ["Node", "Nest.js", "APIs"],
  },
  {
    icon: "🎨",
    bg: "rgba(245,158,11,0.12)",
    title: "Frontend Development",
    desc: "Responsive, high-performance interfaces using React, TypeScript, and Tailwind CSS with pixel-perfect design.",
    stack: ["React", "TS", "Tailwind"],
  },
  {
    icon: "📱",
    bg: "rgba(34,197,94,0.12)",
    title: "MERN Stack",
    desc: "Full-stack applications using MongoDB, Express, React, and Node.js for robust end-to-end solutions.",
    stack: ["MongoDB", "Express", "React"],
  },
  {
    icon: "⛓️",
    bg: "rgba(239,68,68,0.12)",
    title: "Blockchain Integration",
    desc: "Smart contract integration, wallet connections, and blockchain-powered apps using Web3 technologies.",
    stack: ["Web3", "Ethers.js", "Solidity"],
  },
  {
    icon: "⚡",
    bg: "rgba(6,182,212,0.12)",
    title: "Zapier Automation",
    desc: "Automate your business workflows, connect apps, reduce manual tasks, and streamline operations effortlessly.",
    stack: ["Zapier", "APIs", "Automation"],
  },
  {
    icon: "🔌",
    bg: "rgba(168,85,247,0.12)",
    title: "Chrome Extension Development",
    desc: "Custom browser extensions to supercharge your business, enhancing productivity and integrating with apps seamlessly.",
    stack: ["Chrome", "JS", "Extension"],
  },
  {
    icon: "🤝",
    bg: "rgba(251,191,36,0.12)",
    title: "Talent Hiring & Team Building",
    desc: "Helping you identify the right talent, building and scaling high-performing development teams for your product needs.",
    stack: ["Hiring", "Mentoring", "Scaling"],
  },
];

export const testimonials = [
  {
    stars: 5,
    text: "Aamir swiftly addressed complex functionalities that challenged our in-house team. His maintainable and reusable code solutions enhanced our team's independence and capability. We plan to further our capacity building through additional contracts with him.",
  },
  {
    stars: 5,
    text: "Great job, Aamir! Your efforts in fixing the API issues have significantly improved performance and reliability. Your attention to detail and quick resolution of bugs ensure a seamless experience for our users. Keep up the excellent work!",
  },
  {
    stars: 5,
    text: "This is my second time working with Aamir, and he has once again delivered exceptional work. He is professional, communicative, and always meets deadlines with high-quality results. I highly recommend him and look forward to working together again!",
  },
  {
    stars: 5,
    text: "Working with Aamir was an outstanding experience. His technical expertise and professionalism truly stood out. He delivered exactly what we needed, on time and beyond expectations.",
  },
];

export const testimonialsSubtitle =
  "Explore the Spectrum of Client Experiences, Where Every Testimonial Speaks to the Value, Expertise, and Commitment Delivered.";

export const contactInfo = [
  { icon: "📍", label: "Address", val: "Islamabad, Pakistan" },
  { icon: "📧", label: "Mail Me", val: "amirmehboob16@gmail.com" },
  { icon: "📞", label: "Call Me", val: "+923159142436"}
];

export const tagClass: Record<TagType, string> = {
  cyan: "bg-cyan-400/10 border border-cyan-400/20 text-cyan-400",
  purple: "bg-violet-500/10 border border-violet-500/25 text-violet-300",
  amber: "bg-amber-400/10 border border-amber-400/25 text-amber-300",
};
