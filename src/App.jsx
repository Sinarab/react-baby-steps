import { useState } from "react";
import Clicker from "./components/Clicker";

// creating a component
export default function App() {
  const teste = Math.random() * Math.pow(0.5, 10);

  const [hasClicker, setHasClicker] = useState(true);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  // returning a JSX element
  return (
    <>
      <h1>Example {teste}</h1>
      <button onClick={toggleClickerClick}>
        Toggle clicker: {hasClicker ? `Hide` : `Show`}
      </button>
      {/* {hasClicker ? <Clicker /> : null} */}
      {hasClicker && <Clicker />}
    </>
  );
}
