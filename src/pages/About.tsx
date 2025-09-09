import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Pagination";
import { BeamTechnologies } from "@/components";

export const About = () => {
  const abouts = [
    {
      title: "My Interests",
      content:
        "I'm a full stack developer passionate about creating modern, reliable web applications. I love diving into new frameworks, experimenting with side projects, and keeping up with the latest developer tools. My curiosity also drives me to explore topics like containerization, real-time data processing, and the crypto ecosystem.",
    },
    {
      title: "Professional Experience",
      content:
        "Over the past three years, I've developed and maintained web applications primarily using React, Node.js, and TypeScript. My experience includes building APIs, automation scripts, dashboards, and cloud-native solutions. I'm comfortable working in collaborative, agile teams and enjoy sharing knowledge while always looking to learn something new.",
    },
    {
      title: "Academic Background",
      content:
        "I'm currently pursuing a Bachelor's degree in Information Systems. My academic journey has given me a strong foundation in computer science, software engineering, and practical problem-solving—skills I constantly apply in real-world projects.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % abouts.length);
    }, 15000);

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
          <Pagination className="mt-8">
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
        <div className="hidden lg:flex flex-shrink-0">
          <BeamTechnologies />
        </div>
      </div>
    </div>
  );
};
