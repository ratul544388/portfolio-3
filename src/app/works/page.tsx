"use client";

import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/constants";
import { Category } from "@/types";
import { useState } from "react";
import { CategorySlider } from "./_components/category-slider";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(({ categories }) =>
          categories.some((category) => category === activeCategory),
        );

  return (
    <div className="flex w-full flex-col items-center pt-4">
      <Hero
        pageLabel="Works"
        title="A collection of my best projects"
        highlightedTitleWords={["projects"]}
        description="With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations."
      />
      <CategorySlider
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <ul className="flex flex-col mt-12 items-center gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ul>
    </div>
  );
};

export default Works;
