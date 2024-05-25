"use client";

import { useModalStore } from "@/hooks/use-modal-store";
import { Project } from "@/types";
import { motion, MotionConfig } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import { StaggerWords } from "./stagger-words";
import { WhileInView } from "./while-in-view";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { width } = useWindowSize();
  const { onOpen } = useModalStore();

  const { name, image, techs } = project;

  const sm = width >= 640;

  return (
    <>
      <WhileInView
        onClick={() => onOpen("viewProjectModal", { project })}
        className="mx-auto w-full max-w-[800px] rounded-sm border bg-background/20 backdrop-blur-sm"
      >
        <motion.div
          initial="initial"
          animate="initial"
          whileHover={sm ? "hover" : ""}
          className="cursor-pointer px-5 py-14 pt-[240px]"
        >
          <MotionConfig transition={{ duration: 0.4 }}>
            <div className="relative flex w-full flex-col gap-2 sm:flex-row">
              <motion.p
                variants={{ initial: { opacity: 1 }, hover: { opacity: 0 } }}
                className="text-sm text-muted-foreground"
              >
                01
              </motion.p>
              <div>
                <motion.div variants={{ initial: { x: 0 }, hover: { x: -30 } }}>
                  <StaggerWords variant="h3" className="ml-1">
                    {name}
                  </StaggerWords>
                </motion.div>
                <ul className="mt-3.5 flex flex-wrap gap-2">
                  {techs.map((item, index) => (
                    <motion.li
                      whileInView={{
                        scale: [0.3, 1],
                        opacity: [0, 1],
                      }}
                      transition={{ duration: 0.3, delay: index * 0.2 }}
                      key={item}
                      className="whitespace-nowrap rounded-full border bg-neutral-900/20 px-4 py-2 text-xs text-muted-foreground opacity-0"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="absolute right-0 flex items-center gap-2">
                <motion.p
                  variants={{ initial: { x: 25 }, hover: { x: 0 } }}
                  className="text-sm text-muted-foreground"
                >
                  26 june 2023
                </motion.p>
                <motion.div
                  variants={{ initial: { scale: 0 }, hover: { scale: 1 } }}
                >
                  <ArrowUpRight className="size-4" />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ left: "50%", x: "-50%" }}
              variants={{
                initail: {
                  rotate: 0,
                },
                hover: {
                  rotate: -3,
                },
              }}
              className="absolute -top-4 h-[230px] w-[90%] max-w-[400px] rounded-md border bg-background"
            >
              <Image
                src={image}
                alt={name}
                fill
                placeholder="blur"
                className="object-cover"
              />
            </motion.div>
          </MotionConfig>
        </motion.div>
      </WhileInView>
    </>
  );
};
