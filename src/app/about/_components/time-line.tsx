import { CardWrapper } from "@/components/card-wrapper";
import { StaggerLetters } from "@/components/stagger-letters";
import { WhileInView } from "@/components/while-in-view";
import { experiences } from "@/constants";
import { cn } from "@/lib/utils";

export const TimeLine = () => {
  return (
    <section className="flex flex-col items-center">
      <StaggerLetters variant="h2" highlights={["Experience"]}>
        My Experience
      </StaggerLetters>
      <ul className="mt-8 space-y-16 lg:translate-x-[calc(50%_-_30px)]">
        {experiences.map((experience, index) => (
          <TimeLineItem
            index={index}
            key={experience.title}
            experience={experience}
          />
        ))}
      </ul>
    </section>
  );
};

const TimeLineItem = ({
  experience: { icon: Icon, date, description, location, title },
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) => {
  const even = index % 2 !== 0;
  return (
    <WhileInView>
      <div
        className={cn(
          "flex gap-6",
          even &&
            "lg:-translate-x-[calc(100%_-_37px)] lg:flex-row-reverse",
        )}
      >
        <div className="relative flex flex-col items-center">
          <div className="grid size-10 min-h-10 place-content-center rounded-full border bg-background/40 backdrop-blur-sm">
            <Icon className="size-4 text-primary" />
          </div>
          <span className="absolute top-10 h-[calc(100%_+_10px)] w-1.5 rounded-b-full border border-t-0 bg-background/40 backdrop-blur-sm" />
        </div>
        <CardWrapper title={title} className="relative max-w-[400px]">
          <span
            className={cn(
              "absolute left-0 top-3 size-4 -translate-x-[52%] rotate-45 border border-r-0 border-t-0 bg-background backdrop-blur-xl",
              even && "lg:left-full lg:rotate-[225deg]",
            )}
          />
          <p className="text-muted-foreground">{description}</p>
          <p className="mt-3 text-sm text-muted-foreground">{date}</p>
        </CardWrapper>
      </div>
    </WhileInView>
  );
};
