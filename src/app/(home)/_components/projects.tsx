import { projects } from "@/constants";
import { AnimatedButton } from "../../../components/animated-button";
import { ProjectCard } from "../../../components/project-card";
import { StaggerLetters } from "../../../components/stagger-letters";

export const Projects = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16">
      <StaggerLetters highlights={["Highlight"]} variant="h2">
        Projects Highlight
      </StaggerLetters>
      {projects.slice(0, 3).map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
      <AnimatedButton href="/works">Explore all</AnimatedButton>
    </section>
  );
};
