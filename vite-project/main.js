import "./style.css";
import { setupCounter } from "./counter.js";
import "./episodes.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="main-header">everything VICTORiOUS!</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
