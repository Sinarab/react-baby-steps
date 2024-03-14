import Clicker from "./components/Clicker";
// creating a component
export default function App() {
  const teste = Math.random() * Math.pow(0.5, 10);

  // returning a JSX element
  return (
    <>
      <h1>Example</h1>
      <Clicker />
    </>
  );
}
