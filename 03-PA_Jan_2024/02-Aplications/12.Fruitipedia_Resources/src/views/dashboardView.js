import { getAllFruits } from '../data/data.js';
import { html, page, render } from '../lib.js';

let dashboardTemplate = (data) => html`
   <h2>Fruits</h2>
        
         <!-- Display an h2 if there are no posts -->
         <h2>No fruit info yet.</h2>
`;

let dashboardDataTemplate = (data) => html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${data.map(item => cardTemplate(item))}
        </section>
`;

let cardTemplate = (item) => html`
        <div class="fruit">
            <img src="../../${item.imageUrl}" alt="example1" />
            <h3 class="title">Pineapple</h3>
            <p class="description">The pineapple is a tropical plant with an edible fruit.
              It is the most economically significant plant in the family Bromeliaceae.The 
              pineapple is indigenous to South America.
              Pineapples grow as a small shrub, the individual flowers of the unpollinated plant
               fuse to form a multiple fruit. The plant is normally propagated from the offset produced
                at the top of the fruit,or from a side shoot, and typically matures within a year.</p>
            <a class="details-btn" href="">More Info</a>
          </div>
`;

export async function showDashboardView() {
    let data = await getAllFruits();
    debugger;
    render(dashboardTemplate(data));
}