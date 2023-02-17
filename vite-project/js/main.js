import "../styles/style.css";
import { episodes } from "./episodes";
import { characters } from "./characters";

console.log(episodes);
console.log(characters);

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="main-header">everything VICTORiOUS!</h1>
  </div>
`;
