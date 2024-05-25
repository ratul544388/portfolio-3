import { socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "./animated-button";
import { CardWrapper } from "./card-wrapper";
import { Photo } from "./photo";
import { StaggerLetters } from "./stagger-letters";
import { FaDownload } from "react-icons/fa";
import { WhileInView } from "./while-in-view";

interface AboutProps {
  title?: string;
  highlightedTitleWords?: string[];
}

export const About = ({ title, highlightedTitleWords }: AboutProps) => {
  return (
    <section className="mt-12 flex max-w-[500px] flex-col items-center pb-[1000px] md:pb-[650px] lg:pb-[580px]">
      {title && (
        <StaggerLetters
          className="mt-20"
          variant="h2"
          highlights={highlightedTitleWords}
        >
          {title}
        </StaggerLetters>
      )}
      <div className="relative">
        <AboutMe />
        <WhereIWork />
        <MeOnline />
        <Hobbies />
        <DownloadCV />
      </div>
    </section>
  );
};

const AboutMe = () => {
  const texts = [
    "Nice to meet you! I'm Ratul, a Full Stack Web Developer with over 2 years of experience.",
    "I focus on frontend development, blending technical and creative skills to create excellent user experiences.",
    "Proficient in HTML, CSS, JavaScript, React, Node.js, next.js and more, I build high-performing and responsive projects.",
    "Committed to continuous learning, I deliver cutting-edge, efficient, scalable, and secure web applications.",
  ];

  const colors = {
    green: [
      "Full",
      "Stack",
      "Web",
      "Developer",
      "HTML,",
      "CSS,",
      "cutting-edge",
    ],
    blue: [
      "technical",
      "creative",
      "Node.js,",
      "Next.js",
      "continuous",
      "learning,",
    ],
    yellow: ["user", "experiences", "focus", "performing", "responsive"],
    purple: ["JavaScript,", "React,", "frontend", "development", "scalable,"],
  };

  return (
    <WhileInView>
      {" "}
      <CardWrapper title="about-me" className="mt-14">
        <ul>
          {texts.map((text, index) => (
            <li key={index} className="flex gap-2 font-medium">
              <span className="flex flex-wrap text-muted-foreground">
                {index + 1}.
              </span>
              <p className="flex flex-wrap">
                {text.split(" ").map((word, index) => (
                  <>
                    <span
                      key={index}
                      className={cn(
                        colors.green.includes(word) && "text-green-400",
                        colors.blue.includes(word) && "text-blue-400",
                        colors.yellow.includes(word) && "text-yellow-400",
                        colors.purple.includes(word) && "text-purple-400",
                      )}
                    >
                      {word}
                    </span>
                    <span>&nbsp;</span>
                  </>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </CardWrapper>
    </WhileInView>
  );
};

const WhereIWork = () => {
  const items = [
    "I'm currently working on Fiverr and Upwork as a freelancer, handling various web development projects.",
    "I also work on local projects, helping small businesses and individuals with their web development needs.",
  ];

  return (
    <WhileInView>
      {" "}
      <CardWrapper
        title="where-i-work"
        className="absolute max-w-[300px] translate-y-14 lg:-translate-x-32 lg:-translate-y-10"
      >
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2 font-medium">
              <span className="text-muted-foreground">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </CardWrapper>
    </WhileInView>
  );
};

const Hobbies = () => {
  const items = ["Coading", "Reading", "Swimming", "Gaming"];
  return (
    <WhileInView>
      {" "}
      <CardWrapper
        title="hobbies"
        className="absolute w-fit translate-x-10 translate-y-[350px] lg:translate-x-48 lg:translate-y-72"
      >
        <ul className="space-y-2 font-medium">
          {items.map((item, index) => (
            <li className="flex gap-2" key={index}>
              <span className="text-muted-foreground">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </CardWrapper>
    </WhileInView>
  );
};

const MeOnline = () => {
  return (
    <WhileInView>
      {" "}
      <CardWrapper
        title="me-online"
        className="absolute w-fit translate-x-[200px] translate-y-[350px] lg:translate-x-72 lg:translate-y-28"
      >
        <ul className="space-y-2 font-medium">
          {socialLinks.map(({ label }, index) => (
            <li className="flex gap-2" key={index}>
              <span className="text-muted-foreground">{index + 1}.</span>
              {label}
            </li>
          ))}
        </ul>
      </CardWrapper>
    </WhileInView>
  );
};

const DownloadCV = () => {
  return (
    <WhileInView>
      <CardWrapper
        title="download-cv"
        className="absolute right-1/2 h-[17rem] w-44 translate-x-1/2 translate-y-[650px] rounded-md bg-neutral-900/40 backdrop-blur-sm md:right-0 md:translate-x-[70px] md:translate-y-[100px] lg:-translate-y-[50%] lg:translate-x-[80%]"
      >
        <Photo src="/cv.png" alt="cv" className="h-32 w-20" />
        <AnimatedButton
          className="mt-4 h-10 text-sm"
          endIcon={FaDownload}
          href="/ratuls-cv.pdf"
          download
          endIconClassName="size-3 group-hover:translate-y-1"
        >
          Download
        </AnimatedButton>
      </CardWrapper>
    </WhileInView>
  );
};
