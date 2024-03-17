import { html } from "../../node_modules/lit-html/lit-html.js";

let dashboardTemplate = (data) => html `
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            
        </div>
`;

let cardTemplate = (item) => html `
    <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="./images/chair.jpg" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>55 $</span></p>
                            </footer>
                            <div>
                                <a href="#" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`;

export async function showDashboardView(ctx) {
    let data = await dataService.getAllFurniture();
    ctx.render(dashboardTemplate(data));
}