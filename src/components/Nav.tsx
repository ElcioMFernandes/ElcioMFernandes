import { TbCode } from "react-icons/tb";

export const Nav = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between flex-shrink-0 p-4 select-none">
      <a
        href="https://github.com/ElcioMFernandes/ElcioMFernandes"
        target="_blank"
        className="cursor-none"
      >
        <TbCode className="w-6 h-6" />
      </a>
      <ul className="flex flex-row items-center justify-between gap-4 bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-teal-500">
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
    </nav>
  );
};
