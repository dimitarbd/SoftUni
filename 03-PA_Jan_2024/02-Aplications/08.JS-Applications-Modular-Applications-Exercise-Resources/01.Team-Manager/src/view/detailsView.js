import { renderer } from "../common/render.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../common/userHelper.js";
import { getParametersId } from "../common/goTo.js";
import { dataService } from "../api/dataService.js";

let detailsTemp = (hasUser, team, hasOwner) => html`
<section id="team-home">
    <article class="layout">
        <img src="../..${team.logoUrl}" class="team-logo left-col">
        ${userActionTemp(team)}
        ${memberTemp()}
        ${hasOwner ? ownerMemberAction() : ''}
    </article>
</section>
`;

let userActionTemp = (team) => html`
<div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">3 Members</span>
            <div>
                <a href="#" class="action">Edit team</a>
                <a href="#" class="action">Join team</a>
                <a href="#" class="action invert">Leave team</a>
                Membership pending. <a href="#">Cancel request</a>
            </div>
        </div>
`;

let memberTemp = () => html`
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                <li>My Username</li>
                <li>James<a href="#" class="tm-control action">Remove from team</a></li>
                <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
            </ul>
        </div>
`;

let ownerMemberAction = () => html`
        <div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                        class="tm-control action">Decline</a></li>
                <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                        class="tm-control action">Decline</a></li>
            </ul>
        </div>
`;
 
export async function showDetailsView(ctx) {
    let userData = userHelper.getUserData();
    let id = ctx.params.id;
    let team = await dataService.getSingleTeam(id);
    let hasOwner = userHelper.hasOwner(team._ownerId);
    let teamMember = await dataService.getListMember(team._id);

    renderer(detailsTemp(!!userData, team, hasOwner));
}