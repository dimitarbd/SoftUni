import { dataService } from "../api/dataService.js";
import { hasOwner } from "../utils/userUtils.js";

const view = document.querySelector("div[data-view-name='details']");

export async function showDetaiView(ctx, data) {
    view.innerHTML = "";
    ctx.render(view);
    const id = data[0];

    const idea = await dataService.getIdea(id);
    const isOwner = hasOwner(idea._ownerId);
    view.innerHTML = createIdeaTemp(idea, isOwner)
}

function createIdeaTemp(data, isOwner) {
    return `
    <img class="det-img" src=${data.img} />
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
            </div>
            <div class="text-center">
                ${isOwner ? '<a class="btn detb" href="">Delete</a>' : ""}
            </div>
    `
}
