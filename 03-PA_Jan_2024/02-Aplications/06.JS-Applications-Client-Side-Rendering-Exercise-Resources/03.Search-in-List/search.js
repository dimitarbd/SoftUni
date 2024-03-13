import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js"; 

document.querySelector("button").addEventListener("click", search);

let townsRoot = document.getElementById("towns");
let resultRoot = document.getElementById("result");
let inputRef = document.getElementById("searchText");


update();

function update(match) {
    render(ulTemplate(towns, match),townsRoot)
}

function ulTemplate(towns, match)  {
   return html `<ul>${towns.map(town => createTemplate(town, match?.includes(town)))}</ul>`
};

function createTemplate (town, isActive) {
   return html`<li class=${isActive ? "active" : ""}>${town}</li>`
};

function search() {
   let searchText = inputRef.value;
   let match = towns.filter(town => town.includes(searchText));
   update(match);
   renderMatchCount(match.length);
}

function renderMatchCount(count) {
   render(html`${count} matches found`, resultRoot)
}

