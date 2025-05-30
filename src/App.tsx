import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Desktop />
      <Taskbar />
    </div>
  );
};

export default App;
