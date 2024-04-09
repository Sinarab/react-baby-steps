import { useState, useEffect, useRef } from "react";

export default function Clicker({ increment, keyName, color }) {
  // to update a state we have to use a setter function
  // useState is a Hook
  // hooks to do specific tasks inside a component
  const savedCount = +localStorage.getItem(keyName) || 0;
  const [count, setCount] = useState(savedCount);

  // ref is a simple object associated with something of the template
  // remember that here the ref is not defined yet
  // usually is used on useEffect
  const buttonRef = useRef();

  // useEffect is a hook to handle changes
  // it is called:
  // each time the component is rendered
  // when a specif state changes
  // or just once!

  // careful using this hook, ex: it will render de component twice
  // useEffect(() => {
  //   const savedCount = +localStorage.getItem("clicks") || 0;;
  //   setCount(savedCount);
  // }, []); // just once!

  // How to dispose!
  useEffect(() => {
    console.log(buttonRef)
    buttonRef.current.style.background = 'papayawhip';
    buttonRef.current.style.color = 'salmon'

    return () => {
      localStorage.removeItem(keyName);
      console.log("dispose");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]); // when count changes

  const onButtonClick = () => {
    // update the state makes the component re-render!
    // careful with that, it can cause performance issues
    // setCount(count + 1);

    // update can be done with a function
    // better to handle when you have async operations
    setCount((prev) => prev + 1);
    increment();
  };

  return (
    <div>
      <div>
        Clicks count: <span style={{ color }}>{count}</span>{" "}
      </div>
      {/*  send the function, do not call it! 
      mouse ev ref: https://legacy.reactjs.org/docs/events.html#mouse-events */}
      <button ref={buttonRef} onClick={onButtonClick}>
        Click me!
      </button>
    </div>
  );
}
