import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {
    constructor() {
        housesService.loadData()
        this.drawHouses()
    }

    drawHouses() {
        let houseInject = ''
        AppState.houses.forEach(house => {
            houseInject += house.HTML
        })

        document.querySelector('#houseInjects').innerHTML = houseInject
    }

    addHome() {
        event.preventDefault()
        const data = getFormData(event.target)
        housesService.addHome(data)
        this.drawHouses()
        event.target.reset()
    }

    removeHome(id) {
        housesService.removeHome(id)
        this.drawHouses()
    }
}