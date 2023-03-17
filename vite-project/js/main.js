import "../styles/style.css";
import { DOM } from "./dom";
import { info } from "./info";

document.querySelector("#app").innerHTML = `
  <h1>everything vicTORious!</h1>
  <h3>here you can find every episode, character, and actor from nickelodeon's hit tv show, vicTORious!</h4>
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
  const infoFilter = info.filter(
    (info) => info.type === "actor"
  );
  infoFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "beforeend",
      `
    <div class="info-card">
    <h2 class="actor-name">${element.actName}</h2>
    <h3 class= "actor-portrays">portrays: ${element.portrays}</h3>
    <h3 class= "actor-age">age: ${element.age}</h3>
    </div>`
    );
  });
});

const characters = document.getElementById("characters-btn");
characters.addEventListener("click", function () {
  display.innerHTML = "";
  const infoFilter = info.filter(
    (info) => info.type === "character");
  infoFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "beforeend",
      `
    <div class="info-card">
    <h2 class="character-name">name: ${element.charName}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    <img src="${element.img}"
    alt="character" class= "character-img">
    </div>
    <h3 class="character-charType">character type: ${element.charClass}</h3>
    <h3 class="character-episodes">number of episodes featured in: ${element.episodes}</h3>
    
    </div>`
    );
  });
});

const episodes = document.getElementById("episodes-btn");
episodes.addEventListener("click", function () {
  display.innerHTML = "";
  const infoFilter = info.filter((info) => info.type === "episode");
  infoFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "beforeend",
      `
    <div class="info-card">
    <h2 class="episode-title">episode title: "${element.title}"</h2>
    <h3 class= "episode-placement">season and number: s.${element.season}, ep.${element.episodenumber}</h3>
    <h3 class= "episode-desc">description: "${element.description}"</h3>
    </div>`
    );
  });
});