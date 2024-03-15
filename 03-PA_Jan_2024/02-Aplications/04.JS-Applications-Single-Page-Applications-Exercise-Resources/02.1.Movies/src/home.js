import { showDetails } from "./details.js";
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
    ul.innerHTML = "";
    document.getElementById("movie").style.display = "block";
    const data = await getAllMovies();
    data.forEach(movie => {
        createMovie(movie, userId)
    })
}

function createMovie(data, userID) {
    const li = document.createElement("li");
    li.classList.add("card");
    li.classList.add("md-4");

    li.innerHTML = `
    <img src=${data.img}
        class="card-img-top"
        alt="no img"
    />
    <div class="card-body">
        <h4 class="card-title">${data.title}</h4>
    </div>
    <div class="card-footer">  
        <a href="/details/${data.id}">
            <button data-id=${data._id} type="button" class="btn btn-info"> Details </button>
        </a>
    </div>
    `;
    if (!userID) {
       li.querySelector(".card-footer a").display.style = "none";
    } else {
        li.querySelector(".card-footer a").addEventListener("click", showDetails)
    }

    ul.appendChild(li);
};