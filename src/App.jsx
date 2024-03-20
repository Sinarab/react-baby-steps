import { useState } from "react";
import Clicker from "./components/Clicker";

// creating a component
export default function App({ children }) {
  const teste = Math.random() * Math.pow(0.5, 10);

  const [hasClicker, setHasClicker] = useState(true);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const genHSLColor = () => {
    return `hsl(${Math.random() * 360}deg, 100%, 70%)`;
  };

  // returning a JSX element
  return (
    <>
      <h1>Example {teste}</h1>
      {children}
      <button onClick={toggleClickerClick}>
        Toggle clicker: {hasClicker ? `Hide` : `Show`}
      </button>
      {/* {hasClicker ? <Clicker /> : null} */}
      {hasClicker && (
        <>
          <Clicker keyName="countA" color={genHSLColor()} />
          <Clicker keyName="countB" color={genHSLColor()} />
          <Clicker keyName="countC" color={genHSLColor()} />
        </>
      )}
    </>
  );
}
