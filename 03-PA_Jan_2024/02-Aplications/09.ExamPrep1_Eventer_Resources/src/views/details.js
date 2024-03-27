import { deleteEvent, getEventById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

let detailTemplate = (data, hasUser, isOwner, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.name}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${data.date}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${data.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">0</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            ${hasUser ? html`
                <div id="action-buttons">
                  ${ isOwner ? html`
                  <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                  <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : html`
                  <a href="javascript:void(0)" id="go-btn">Going</a> `}
                </div>` : null }
          </div>
        </section>
`;

export async function showDetailsView(ctx) {
    let id = ctx.params.id;
    let event = await getEventById(id);

    let user = getUserData();
    let hasUser = !!user;
    let isOwner = hasUser && user._id == event._ownerId;

    render(detailTemplate(event, hasUser, isOwner, onDelete));

    async function onDelete() {
        let choice = confirm('Are you sure?');

        if (choice) {
            await deleteEvent(id);
            page.redirect('/catalog');

        }
    }
}