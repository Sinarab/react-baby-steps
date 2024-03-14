import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const toto = "tata";
const array = [1, 2, 3, 4, 5];

root.render(
  <div>
    <h1 className="title">Dynamic title - {toto}</h1>
    <div>I can do: {"concat string with number: " + 4 + 4}</div>
    <div>I can do: {`random number: ${Math.random()}`}</div>
    <div>I can do: condicionals {toto ? "yes" : "no"}</div>
    <div>I can do: another tag inside js {<b>here</b>}</div>
    <div>I can do: map {array.map((n) => ` ${n * 2}`)}</div>
    <input type="checkbox" id="the-checkbox" />
    <label htmlFor="the-checkbox">Linking a checkbox</label>
    <h3>
      Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Delectus
      eum omnis, ex molesti+ae, quos, quas quae quia quidem quibusdam
    </h3>
    {/* for the style, we can send a object */}
    <div
      style={{
        color: "coral",
        backgroundColor: "purple",
        padding: "1rem",
      }}
    >
      Styling from jsx
    </div>
    {/* for the style, traditional way from css file */}
    <div className="cute-paragraph">Styling from a css file</div>
    {/* for the style, using css framework like tailwind */}

  </div>
);
