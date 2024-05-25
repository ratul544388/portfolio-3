"use client"
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { TimeLine } from "./_components/time-line";

const AboutPage = () => {
  return (
    <div className="flex items-center flex-col">
      <Hero
        pageLabel="About"
        title="Let's get to know each other"
        highlightedTitleWords={["each", "other"]}
        description="Let me introduce myself, my workflows, my collaborations, and the technologies I like to use to bring my projects to life."
      />
      <About/>
      <TimeLine/>
    </div>
  );
};

export default AboutPage;
