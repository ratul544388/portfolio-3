import { AnimatedButton } from "@/components/animated-button";
import { CardWrapper } from "@/components/card-wrapper";
import { Photo } from "@/components/photo";
import { StaggerWords } from "@/components/stagger-words";

export const CollaborateCard = () => {
  return (
    <CardWrapper
      title="collaborate"
      className="mt-20 max-w-[800px]"
      childrenClassName="p-5 sm:p-8"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <Photo
          src="/reviews/1.webp"
          alt="author photo"
          className="size-24 min-w-24 rounded-full"
        />
        <StaggerWords variant="h2">
          Let&apos;s work together together on your next project
        </StaggerWords>
      </div>
      <AnimatedButton href="/contact" className="mt-8 w-fit">
        let&apos;s-get-in-touch
      </AnimatedButton>
    </CardWrapper>
  );
};
