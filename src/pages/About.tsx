import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
} from "@/components/Pagination";
import { abouts } from "@/constants/about";
import { useState, useEffect } from "react";

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % abouts.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [abouts.length]);

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + abouts.length) % abouts.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % abouts.length);
  };

  const activeAbout = abouts[activeIndex];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="hidden lg:block">
          <img
            src="/images/Isometric Stickers - Magnifying Glass.png"
            alt="Magnifying glass illustration"
            className="w-80 h-80"
          />
        </div>
        <main className="max-w-2xl p-8">
          <h2 className="text-3xl font-bold select-none mb-8 sm:text-4xl md:text-5xl">
            About me
          </h2>
          <article className="min-h-[220px]">
            <section key={activeAbout.title} className="mt-8">
              <h3 className="text-xl font-bold text-primary select-none mb-4">
                {activeAbout.title}
              </h3>
              <p>{activeAbout.content}</p>
            </section>
          </article>
          <Pagination className="mt-8 select-none">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={handlePrevious} />
              </PaginationItem>
              {abouts.map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  );
};
