import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import { memo, useMemo } from "react";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = memo(({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-accent/20 bg-surface/80 hover:border-accent/50 hover:bg-surface transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-accent/10"
          width="32"
          height="32"
          alt=""
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white font-mono">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-text-muted font-mono">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-text-muted">{body}</blockquote>
    </figure>
  );
});

export default function Testimonial() {
  const firstRowCards = useMemo(
    () => firstRow.map((review) => <ReviewCard key={review.username} {...review} />),
    []
  );
  const secondRowCards = useMemo(
    () => secondRow.map((review) => <ReviewCard key={review.username} {...review} />),
    []
  );

  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading text-white">Testimonials</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRowCards}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRowCards}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-void"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-void"></div>
      </div>
    </div>
  );
}
