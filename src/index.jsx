import "./style.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(
  <div>
    <App clickersCount={10}>
      <h3>Children</h3>
    </App>
  </div>
);
