import { getAllEvents } from '../data/events.js';
import { html, render } from '../lib.js';

let catalogTemplate = (events) => html`
    <h2>Current Events</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
            ${events.length ? events.map(eventTemplate) : html`<h4>No Events yet.</h4>`}
        </section>
`;

let eventTemplate = (event) => html`
    <div class="event">
            <img src=${event.imageUrl} alt="example1" />
            <p class="title">${event.name}</p>
            <p class="date">${event.date}</p>
            <a class="details-btn" href="/catalog/${event._id}">Details</a>
          </div>
`;

export async function showCatalog(ctx) {
    let events = await getAllEvents();
  
    render(catalogTemplate(events));
}