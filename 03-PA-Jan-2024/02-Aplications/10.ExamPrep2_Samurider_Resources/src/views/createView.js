import { createMotorcycle } from '../data/data.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let createTemplate = (handler) => html`
    <section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form class="create-form" @submit=${handler}>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>
`;

export function showCreateView(){
    let handler = createSubmitHandler(onSubmit);

    render(createTemplate(handler));
}

async function onSubmit(data, form) {
    let { model, imageUrl, year, mileage, contact, about } = data;

    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert('All fields are required!');
    }

    await createMotorcycle(data);
    page.redirect('/dashboard');

}
