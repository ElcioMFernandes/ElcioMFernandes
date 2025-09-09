import { TbCode } from "react-icons/tb";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler";

export const Nav = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between flex-shrink-0 select-none p-6">
      <a
        rel="noopener noreferrer"
        href="https://github.com/ElcioMFernandes/ElcioMFernandes"
        target="_blank"
        className="cursor-none"
      >
        <TbCode className="w-6 h-6" />
      </a>
      <div className="flex flex-row items-center justify-between gap-4">
        <ul className="hidden sm:flex flex-row items-center justify-between gap-4">
          <li>
            <a href="#home" className="cursor-none">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-none">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="cursor-none">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-none">
              Contact
            </a>
          </li>
        </ul>
        <AnimatedThemeToggler className="cursor-none" />
      </div>
    </nav>
  );
};
