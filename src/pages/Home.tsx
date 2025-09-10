import { stack } from "@/constants/stack";
import { Button, Marquee } from "@/components";

export const Home = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center lg:flex-row">
      <div className="flex flex-col p-8 text-left md:p-12 lg:w-auto lg:flex-2 lg:p-20 lg:text-left">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl select-none">
          Hi, i'm Élcio Mateus Fernandes
        </h1>
        <p className="mt-2 text-md text-neutral-600 dark:text-neutral-400 md:text-lg">
          I'm a FullStack Developer with three years of experience in web
          development.
        </p>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/elcio-mateus-fernandes/"
          target="_blank"
          className="mt-6 cursor-none select-none"
        >
          <Button size="lg" className="self-center cursor-none select-none">
            Connect with me
          </Button>
        </a>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 md:p-12 lg:w-auto lg:flex-[1] lg:p-20">
        <img
          src="/images/me.jpeg"
          alt="Photo by Élcio"
          className="h-48 w-48 rounded-4xl object-cover shadow-lg sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80"
        />
        <div className="relative mt-8 flex w-full max-w-lg flex-col items-center justify-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-16 before:bg-gradient-to-r before:from-zinc-100 before:to-transparent after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-16 after:bg-gradient-to-l after:from-zinc-100 after:to-transparent dark:before:from-zinc-900 dark:after:from-zinc-900">
          <Marquee pauseOnHover className="[--duration:60s]">
            {stack.map((item) => (
              <a
                rel="noopener noreferrer"
                key={item.stackname}
                href={item.reference}
                target="_blank"
                className="flex h-full w-20 flex-col items-center justify-center gap-2 cursor-none"
              >
                <img
                  src={item.stackicon}
                  alt={item.stackname}
                  className="h-10 w-10"
                />
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {item.stackname}
                </p>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
