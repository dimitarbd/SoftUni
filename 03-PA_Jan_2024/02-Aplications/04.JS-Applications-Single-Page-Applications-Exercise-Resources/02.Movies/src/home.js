import { getAllMovies } from "./dataService.js";
import { getUserId } from "./userHelper.js";
let ul = document.getElementById("movie-list")

export function showHome() {
    document.querySelectorAll("section").forEach(section => section.style.display = "none");
    document.getElementById("home-page").style.display = "block";

    let userID = getUserId();
    if (userID) {
        showAddBtn();
    }
    showAllMovies(userID);
}

function showAddBtn() {
    document.getElementById("add-movie-button").style.display = "block";
}

async function showAllMovies(userId) {
    document.getElementById("movie").style.display = "block";
    const data = await getAllMovies();
    data.forEach(movie => {
        createMovie(movie, userId)
    })
}

function createMovie(data, userID) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src=${data.img}/>
    <h4>${data.title}</h4>
    `;
    if(userID) {
        let btn = document.createElement("button");
        btn.textContent = "Details"
        btn.dataset.id = data._id
        li.appendChild(btn);
    }
    ul.appendChild(li);
};