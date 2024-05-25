"use client";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/app/(home)/_components/projects";
import { Reviews } from "@/components/reviews";
import { CollaborateCard } from "./(home)/_components/collaborate-card";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Hero
        pageLabel="Home"
        title="Hi, I'm Ratul, a full stack web developer"
        highlightedTitleWords={["I'm", "Ratul,"]}
        description="I'm a full stack web developer. My main focus is building websites using React and Next.js"
        showActionButtons
      />
      <Projects />
      <About
        title="Your interactive developer"
        highlightedTitleWords={["interactive"]}
      />
      <Reviews />
      <CollaborateCard />
    </div>
  );
};

export default Home;
