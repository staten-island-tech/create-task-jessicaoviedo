import "../styles/style.css";
import { DOM } from "./DOM";
import { info } from "./info";
document.querySelector("#app").innerHTML = `
  <h1>everything victorious!</h1>
`;



document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

const actors = document.getElementById("actors-btn");
actors.addEventListener("click", function () {
  display.innerHTML = "";
  const actorFilter = info.filter(
    (info) => info.type === "actor"
  );
  actorFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="info-card">
    <h2 class="actor-name">${element.actName}</h2>
    <h3 class= "actor-portrays">portrays: ${element.portrays}</h3>
    <h3 class= "actor-age">age: ${element.age}</h3>
    </div>`
    );
  });
});

const characters = document.getElementById("character-btn");
characters.addEventListener("click", function () {
  display.innerHTML = "";
  const characterFilter = info.filter((info) => info.type === "character");
  characterFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="info-card">
    <h2 class="character-name">name: ${element.charName}</h2>
    <h3 class= "character-charType">character type:${element.charType}</h3>
    <h3 class= "character-episodes"># of episodes: ${element.episodes}</h3>
    </div>`
    );
  });
});

const episodes = document.getElementById("episodes-btn");
episodes.addEventListener("click", function () {
  display.innerHTML = "";
  const episodeFilter = info.filter((info) => info.type === "episode");
  episodeFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="info-card">
    <h2 class="episode-title">title: ${element.title}</h2>
    <h3 class= "episode-placement">season and number: s.${element.season}, ep.${element.episodenumber}</h3>
    <h3 class= "episode-desc">description: "${element.description}"</h3>
    </div>`
    );
  });
});
