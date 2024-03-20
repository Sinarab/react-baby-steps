import { useState, useMemo } from "react";
import Clicker from "./components/Clicker";

// creating a component
export default function App({ clickersCount, children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [globalCount, setGlobalCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  // There is a problem! changing every time the component react to some state
  // const genHSLColor = () => {
  //   return `hsl(${Math.random() * 360}deg, 100%, 70%)`;
  // };

  // useMemo only change when the dependencies changes
  // used to complex calculations
  const colors = useMemo(() => {
    return [...Array(clickersCount)].map(
      () => `hsl(${Math.random() * 360}deg, 100%, 70%)`
    );
  }, [clickersCount]);

  // Lifiting state - share state between components.
  // pass trought props to its children change.
  const increment = () => {
    setGlobalCount(globalCount + 1);
  };

  // returning a JSX element
  return (
    <>
      <h1>Example {globalCount}</h1>
      {children}
      <button onClick={toggleClickerClick}>
        Toggle clicker: {hasClicker ? `Hide` : `Show`}
      </button>

      {/* {hasClicker ? <Clicker /> : null} */}
      {/* {hasClicker && (
        <>
          <Clicker increment={ increment } keyName="countA" color={genHSLColor()} />
          <Clicker increment={ increment } keyName="countB" color={genHSLColor()} />
          <Clicker increment={ increment } keyName="countC" color={genHSLColor()} />
        </>
      )} */}

      {[...Array(clickersCount)].map(
        (_, i) =>
          hasClicker && (
            <Clicker
              key={i}
              increment={increment}
              keyName={`count${i}`}
              color={colors[i]}
            />
          )
      )}
    </>
  );
}
