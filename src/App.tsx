import { Home, About, Contact, Projects } from "./pages";
import { Nav, SnapProvider, SnapSection } from "./components";

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 cursor-none">
      <Nav />
      <SnapProvider>
        <SnapSection id="home">
          <Home />
        </SnapSection>
        <SnapSection id="about">
          <About />
        </SnapSection>
        <SnapSection id="projects">
          <Projects />
        </SnapSection>
        <SnapSection id="contact">
          <Contact />
        </SnapSection>
      </SnapProvider>
    </div>
  );
};

export default App;
