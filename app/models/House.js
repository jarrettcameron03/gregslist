import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.address = data.address
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HTML() {
        return /*html*/`
        <div class="col-lg-5 col-xl-4 col-xxl-3 col-6">
            <div class="card">
                <img src="${this.imgUrl}" alt="" class="card-img-top">

                <div class="card-body">
                    <span class="fw-bold fs-5 card-title">${this.address} - $${this.price}</span><br>
                    <span class="card-text">${this.description}</span>
                    <p class="card-text">
                        Built In: ${this.year}<br>
                        Sqft: ${this.sqft}<br>
                        Bedrooms: ${this.bedrooms}<br>
                        Bathrooms: ${this.bathrooms}
                    </p>
                    <button class="btn btn-danger" onclick="app.HousesController.removeHome('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        `
    }
}