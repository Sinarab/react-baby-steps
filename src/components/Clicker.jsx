import { useState } from "react";

export default function Clicker() {
  // to update a state we have to use a setter function
  // useState is a Hook
  // hooks to do specific tasks inside a component
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    // update the state makes the component re-render!
    // careful with that, it can cause performance issues
    // setCount(count + 1);

    // update can be done with a function
    // better to handle when you have async operations
    setCount(prev => prev + 1);
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
