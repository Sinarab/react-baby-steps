import { useState, useEffect } from "react";

export default function Clicker() {
  // to update a state we have to use a setter function
  // useState is a Hook
  // hooks to do specific tasks inside a component
  const savedCount = +localStorage.getItem("clicks") || 0;
  const [count, setCount] = useState(savedCount);

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
    return () => {
      localStorage.removeItem("clicks")
      console.log("dispose");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("clicks", count);
  }, [count]); // when count changes

  const onButtonClick = () => {
    // update the state makes the component re-render!
    // careful with that, it can cause performance issues
    // setCount(count + 1);

    // update can be done with a function
    // better to handle when you have async operations
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>Clicks count: {count} </div>
      {/*  send the function, do not call it! 
      mouse ev ref: https://legacy.reactjs.org/docs/events.html#mouse-events */}
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
}
