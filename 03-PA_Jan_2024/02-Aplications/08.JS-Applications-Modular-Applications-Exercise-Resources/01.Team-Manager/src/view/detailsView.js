import { renderer } from "../common/render.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../common/userHelper.js";
import { getParametersId } from "../common/goTo.js";
import { dataService } from "../api/dataService.js";

let detailsTemp = (hasUser, team, hasOwner, pending, members, memberCount) => html`
<section id="team-home">
    <article class="layout">
        <img src="../..${team.logoUrl}" class="team-logo left-col">
        ${hasUser ? userActionTemp(team, memberCount): ""}
        ${memberTemp(hasOwner)}
        ${hasOwner ? ownerMemberAction() : ''}
    </article>
</section>
`;

let userActionTemp = (team, memberCount) => html`
<div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${memberCount} Members</span>
            <div>
                <a href="#" class="action">Edit team</a>
                <a href="#" class="action">Join team</a>
                <a href="#" class="action invert">Leave team</a>
                Membership pending. <a href="#">Cancel request</a>
            </div>
        </div>
`;

let memberTemp = (hasOwner) => html`
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                <li>My Username</li>
                <li>James ${hasOwner && html`<a href="#" class="tm-control action">Remove from team</a>`}</li>
                <li>Meowth ${hasOwner && html`<a href="#" class="tm-control action">Remove from team</a>`}</li>
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
    let pending = teamMember.filter(x => x.status == "pending");
    let members = teamMember.filter(x => x.status == "member");
    let memberCount = members.length;

    renderer(detailsTemp(!!userData, team, hasOwner, pending, members, memberCount));
}