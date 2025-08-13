// components
import Bubbles from "./components/loaders/Bubbles";
const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#02030a]">
      <div className="flex items-center justify-center gap-3 text-neutral-500 text-sm">
        <p>Wait a bit</p>
        <Bubbles />
      </div>
    </div>
  );
};

export default App;
