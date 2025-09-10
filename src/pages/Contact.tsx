import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="hidden lg:block">
          <img
            src="/images/Isometric Stickers - Mobile.png"
            alt="Contact illustration"
            className="w-80 h-80"
          />
        </div>
        <main className="max-w-2xl p-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold select-none mb-4 sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="mailto:elcio@elcio.dev"
              className="cursor-none flex items-center gap-2 text-lg font-medium text-primary hover:underline"
            >
              <Mail className="w-6 h-6" />
              <span>elcio@elcio.dev</span>
            </a>
            <a
              href="https://www.linkedin.com/in/elcio-mateus-fernandes/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none flex items-center gap-2 text-lg font-medium text-primary hover:underline"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ElcioMFernandes"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none flex items-center gap-2 text-lg font-medium text-primary hover:underline"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-12 text-center lg:text-left">
            Illustrations by{" "}
            <a
              href="https://blush.design/pt/collections/yslQDNpHmfg3D7H3uXT3/isometric-stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary cursor-none"
            >
              Blush
            </a>
          </p>
        </main>
      </div>
    </div>
  );
};
