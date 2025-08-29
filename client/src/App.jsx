import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// hooks
import { useAppDispatch } from "./hooks";
// slices
import { newUpdate } from "./features/trackers/trackers.slice";
// pages
import Home from "./pages/Home";
const App = () => {
  // hooks
  const dispatch = useAppDispatch();

  // effects
  useEffect(() => {
    dispatch(newUpdate(0));
  }, []);
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-dark-1 text-light-1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
