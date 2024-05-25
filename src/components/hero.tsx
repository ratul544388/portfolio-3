"use client";
import { motion } from "framer-motion";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import { AnimatedButton } from "./animated-button";
import { StaggerWords } from "./stagger-words";
import { ReactNode } from "react";
import { myGithubLink } from "@/constants";

interface HeroProps {
  pageLabel: string;
  title: string;
  description: string;
  highlightedTitleWords?: string[];
  showActionButtons?: boolean;
}

export const Hero = ({
  pageLabel,
  description,
  title,
  highlightedTitleWords,
  showActionButtons,
}: HeroProps) => {
  return (
    <section className="flex min-h-[calc(100vh_-_20px)] w-full flex-col items-center justify-center pb-10">
      <motion.p
        animate={{
          opacity: [0, 1],
          y: [40, 0],
          transition: { delay: 0.2, duration: 0.3 },
        }}
        className="tracking-widest text-muted-foreground opacity-0"
      >
        {pageLabel}
      </motion.p>
      <StaggerWords
        variant="h1"
        className="mt-3 max-w-[800px]"
        highlights={highlightedTitleWords}
        textCenter
      >
        {title}
      </StaggerWords>
      <motion.p
        animate={{
          opacity: [0, 1],
          y: [-30, 0],
          transition: { duration: 0.3 },
        }}
        className="mt-3 max-w-[800px] text-center text-muted-foreground opacity-0"
      >
        {description}
      </motion.p>
      {showActionButtons && (
        <motion.div
          whileInView={{
            scale: [0, 1],
            opacity: [0, 1],
            transition: { duration: 0.4 },
          }}
          className="mt-10 flex items-center gap-6 opacity-0"
        >
          <AnimatedButton
            className="h-10 sm:h-14"
            endIcon={FaPaperPlane}
            endIconClassName="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1"
            color="purple"
            href="/contact"
          >
            Contact me
          </AnimatedButton>
          <AnimatedButton
            className="h-10 sm:h-14"
            endIcon={FaGithub}
            endIconClassName="ml-3 group-hover:scale-[1.3]"
            href={myGithubLink}
          >
            Github
          </AnimatedButton>
        </motion.div>
      )}
    </section>
  );
};
