import { getEventById } from '../data/events.js';
import { html, page, render } from '../lib.js';

let detailTemplate = (data) => html`
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
            <div id="action-buttons">
              <a href="" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="" id="go-btn">Going</a>
            </div>
          </div>
        </section>
`;

export async function showDetailsView(ctx) {
    let id = ctx.params.id;
    let event = await getEventById(id);
    render(detailTemplate(event));
}