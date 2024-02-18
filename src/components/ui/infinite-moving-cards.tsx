"use client";

import { Link } from "react-router-dom";
import { cn } from "./../../utils/cn";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../../redux/darkModeSlice";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    image:string;
    title: string;
    link:string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="lg:w-[350px] sm:w-[200px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 lg:px-8 lg:py-6 sm:px-4 sm:py-3  md:w-[450px]"
            style={{
              background:`${isDarkMode?"linear-gradient(180deg, var(--slate-800), var(--slate-900) text-secondary":"bg-secondary text-primary" }`
            }}
            key={item.title}
          >
            <blockquote>
            <Link to={`/blog/${item.link}`} className=" flex flex-col gap-2 overflow-hidden">
                <img src={item.image} className="lg:h-[250px] sm:h-[120px] w-full  transition-transform duration-500 transform-gpu hover:scale-110"/>
                <p className="lg:text-md sm:text-xsm font-black hover:text-babyBlue">
                  {item.title}
                </p>
                <p className="lg:text-sm sm:text-xxsm ">
                  {item.quote}
                </p>
                <p className="font-medium hover:text-babyBlue">Learn more →</p>
              </Link>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
