import { generateId } from "../utils/GenerateId.js"

export class Job {
    constructor(data) {
        this.id = data.id || generateId()
        this.company = data.company
        this.title = data.title
        this.salary = data.salary
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HTML() {
        return /*html*/`
        <div class="col-lg-5 col-xl-4 col-xxl-3 col-6">
            <div class="card">
                <img src="${this.imgUrl}" alt="" class="card-img-top">

                <div class="card-body">
                    <span class="fw-bold fs-5 card-title">${this.company} - ${this.title}</span><br>
                    <span class="card-text">$${this.salary}/yr</span>
                    <span class="card-text">
                        <h5>Description</h5>
                        <p>${this.description}</p>
                    </span>
                    <button class="btn btn-danger" onclick="app.JobsController.removeJob('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        `
    }
}