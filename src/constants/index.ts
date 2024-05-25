import { Briefcase, Home, MailIcon, User2 } from "lucide-react";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";
export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";
export const myFiverrLink = "https://www.fiverr.com/ratul544";

import { Category } from "@/types";
import {
  FaBriefcase,
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import blogAppNextjs from "../../public/projects/blog-app-nextjs.png";
import calmLandingPage from "../../public/projects/calm-landing-page.png";
import carBooking from "../../public/projects/car-booking.png";
import digitalMarketplace from "../../public/projects/digital-marketplace.png";
import doctorBooking from "../../public/projects/doctor-booking.png";
import foodDelivery from "../../public/projects/food-delivery.png";
import grassRootLandingPage from "../../public/projects/grass-root-landing-page.png";
import gymAdminManagement from "../../public/projects/gym-admin-management.png";
import mernBlogApp from "../../public/projects/mern-blog-app.png";
import mernNoteApp from "../../public/projects/mern-note-app.png";
import portfolio_1 from "../../public/projects/portfolio-1.png";
import shoppingApp from "../../public/projects/shopping.png";
import simpleprojects from "../../public/projects/simple-projects.png";
import twitterClone from "../../public/projects/twitter-clone.png";
import waffles from "../../public/projects/waffles.png";

export const socialLinks = [
  {
    label: "Linkdin",
    icon: FaLinkedin,
    href: MyLinkdinLink,
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    href: myFacebookLink,
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    href: myTwitterLink,
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: myGithubLink,
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: myGithubLink,
  },
] as const;

export const navLinks = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "About",
    icon: User2,
    href: "/about",
  },
  {
    label: "Works",
    icon: Briefcase,
    href: "/works",
  },
  {
    label: "Contact",
    icon: MailIcon,
    href: "/contact",
  },
];

export const categories: Category[] = [
  "all",
  "booking",
  "ecommerce",
  "landing page",
  "latest",
  "portfolio",
  "social media",
  "blog",
];

export const projects = [
  {
    name: "Digital Marketplace",
    description:
      "Facilitating transactions of premium digital assets, ensuring quality and security for buyers and sellers alike.",
    image: digitalMarketplace,
    categories: ["ecommerce", "latest"],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/digital-marketplace",
    deployedLink: "https://digital-marketplace-rouge.vercel.app",
  },
  {
    name: "Gym Admin Management",
    description:
      "Sheamlessly manage gym Enrollment, renewals and Membership Plans, Utilize Tables with Versatile Filters for member menagement",
    image: gymAdminManagement,
    categories: [],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
    ],
    githubLink: "https://github.com/ratul544388/gym-admin-management",
    deployedLink: "https://afsg.vercel.app/",
  },
  {
    name: "Waffle & Muscle Juice Bar",
    description: "Order Waffles and Drinks, Messaging feature using Crisp",
    image: waffles,
    categories: ["latest", "ecommerce"],
    techs: [
      "React",
      "Framer Motion",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
    ],
    githubLink: "https://github.com/ratul544388/waffle",
    deployedLink: "https://waffle-two.vercel.app/",
  },
  {
    name: "Twitter clone",
    description:
      "Our platform mirrors Twitter's UI and functionality, including blue badge subscriptions, ensuring a seamless user experience.",
    image: twitterClone,
    categories: ["social media"],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
      "Tanstack Query",
    ],
    githubLink: "https://github.com/ratul544388/Twitter-clone-next-14",
    deployedLink: "https://twitter-clone-next-14.vercel.app",
  },
  {
    name: "Food Delivery App",
    description:
      "Streamlined online platform offering seamless food delivery services, ensuring efficiency and convenience for users and restaurants alike.",
    image: foodDelivery,
    categories: ["ecommerce"],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
      "Tanstack Query",
    ],
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
  },
  {
    name: "Portfolio Website",
    description:
      "Dynamic portfolio website featuring animated elements powered by Framer Motion, showcasing creativity and innovation in design and development",
    image: portfolio_1,
    categories: ["portfolio", "latest"],
    techs: ["React", "Next.js", "TypeScript", "ShadcnUI", "Framer Motion"],
    githubLink: "https://github.com/ratul544388/portfolio-1",
    deployedLink: "https://portfolio-vert-pi-26.vercel.app/",
  },
  {
    name: "Shopping App",
    description:
      "Shop for trendy fashion clothing online with secure payment processing through Stripe, ensuring a smooth and stylish shopping experience.",
    image: shoppingApp,
    categories: ["ecommerce", "latest"],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/ecommerce",
    deployedLink: "https://ecommerce-coral-delta.vercel.app",
  },
  {
    name: "Blog app",
    description:
      "Publish your blog and engage with the community by voting and commenting on other blogs, fostering an interactive and supportive environment.",
    image: blogAppNextjs,
    categories: ["social media"],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
      "Tanstack Query",
    ],
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
  },
  {
    name: "Doctor Booking App",
    description:
      "Easily schedule appointments with your preferred doctors online, ensuring convenient access to quality healthcare services.",
    image: doctorBooking,
    categories: ["booking"],
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/Doctor-Booking-App",
    deployedLink: "https://doctor-booking-app.vercel.app",
  },
  {
    name: "Mini Projects & games",
    description:
      "Enjoy a variety of online games and engage in other activities, offering entertainment and fun for users of all ages.",
    image: simpleprojects,
    categories: [],
    techs: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
  },
  {
    name: "Car Booking App",
    description:
      "Search and Filters Efficiently search and filter through a comprehensive collection of brand cars online, leveraging the capabilities of two integrated APIs.",
    image: carBooking,
    categories: ["booking"],
    techs: ["TypeScript", "Next.js", "React", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
  {
    name: "Calm Landing Page",
    description: "Beautiful landing page with Next js and Framer motion",
    image: calmLandingPage,
    categories: ["landing page", "latest"],
    techs: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/calm-landing-page",
    deployedLink: "https://calm-landing-page.vercel.app/",
  },
  {
    name: "University Landing Page",
    description: "Beautiful landing page with Next js and Framer motion",
    image: digitalMarketplace,
    categories: ["landing page"],
    techs: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/university-landing-page",
    deployedLink: "https://university-landing-page.vercel.app/",
  },
  {
    name: "Mern Blog App",
    description:
      "Mern Blog app with posts, votes, comments and admin dashboard",
    image: mernBlogApp,
    categories: ["blog"],
    techs: ["JavaScript", "React", "Express", "MongoDB"],
    githubLink: "https://github.com/ratul544388/mern-blog-app",
    deployedLink: "https://mern-blog-app-kij0.onrender.com/",
  },
  {
    name: "Mern Note App",
    description: "A Smple Mern note app",
    image: mernNoteApp,
    categories: [],
    techs: ["TypeScript", "React", "MongoDB", "Express", "Tanstack Query"],
    githubLink: "https://github.com/ratul544388/mern-note-app",
    deployedLink: "https://mern-note-app-qyl8.onrender.com/",
  },
  {
    name: "Grass Root Landing Page",
    description: "Beautiful landing page with Next js and Framer motion",
    image: grassRootLandingPage,
    categories: ["landing page"],
    techs: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink:
      "https://github.com/ratul544388/grass-root-farmers-landing-page",
    deployedLink: "https://grass-root-farmers-landing-page.vercel.app/",
  },
];

export const staggerAnimation = {
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  initial: "initial",
  whileInView: "animate",
};

export const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const experiences = [
  {
    title: "Self-Taught Full Stack Developer",
    icon: FaGraduationCap,
    location: "Dhaka, Bangladesh",
    description:
      "I embarked on a self-learning journey to become a full-stack web developer. I dedicated my time to learning various technologies, including TypeScript, React, Tailwind CSS, Node.js, Next.js, MongoDB, and more. Through online courses, tutorials, and personal projects, I gained hands-on experience in building web applications from scratch.",
    date: "2022",
  },
  {
    title: "Personal Projects",
    icon: FaLaptopCode,
    location: "Dhaka",
    description:
      "Throughout my learning journey, I worked on several personal projects to apply and reinforce my skills. These projects include (mention some of your projects along with a brief description of each). Through these projects, I honed my problem-solving abilities, improved my coding skills, and gained valuable experience in software development.",
    date: "2023 - 2024",
  },
  {
    title: "Freelance Web Developer",
    icon: FaBriefcase,
    location: "Remote",
    description:
      "As a freelance web developer, I collaborated with clients to bring their ideas to life. I specialized in creating custom websites and web applications tailored to their specific needs. From conceptualization to deployment, I provided end-to-end development services, ensuring high-quality solutions that met client requirements and exceeded expectations.",
    date: "2024",
  },
] as const;
