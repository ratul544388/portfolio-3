"use cilent";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { CardWrapper } from "./card-wrapper";
import { Photo } from "./photo";
import { StaggerLetters } from "./stagger-letters";
import AutoPlay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaggerWords } from "./stagger-words";

const reviews = [
  {
    image: "/reviews/1.webp",
    test_1: "",
    text_2: "",
  },
  {
    image: "/reviews/2.webp",
    test_1: "",
    text_2: "",
  },
  {
    image: "/reviews/3.webp",
    test_1: "",
    text_2: "",
  },
  {
    image: "/reviews/1.webp",
    test_1: "",
    text_2: "",
  },
  {
    image: "/reviews/2.webp",
    test_1: "",
    text_2: "",
  },
  {
    image: "/reviews/3.webp",
    test_1: "",
    text_2: "",
  },
];

export const Reviews = () => {
  const [scope, animate] = useAnimate();

  return (
    <section
      ref={scope}
      className="flex w-full flex-col items-center gap-10 overflow-hidden"
    >
      <StaggerLetters variant="h2">Nice things people say about my work</StaggerLetters>
      <Carousel
        plugins={[AutoPlay({ delay: 4000, stopOnInteraction: false })]}
        className=" w-full"
        opts={{ dragFree: true, loop: true }}
      >
        <CarouselContent>
          {reviews.map(({ image }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
              <CardWrapper title="testmonial" className="w-full max-w-full">
                <Photo
                  src={image}
                  alt="review"
                  className="size-12 rounded-full"
                />
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quasi veniam error harum ad est dolor mollitia neque
                  omnis sapiente maiores eaque rerum, nisi quidem? Consequuntur
                  totam quae distinctio suscipit doloribus accusantium. Sit,
                  mollitia error!
                </p>
                <p className="mt-1 text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </CardWrapper>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
