import "./style.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(
  <div>
    <App>
      <h1>Children</h1>
    </App>
  </div>
);
