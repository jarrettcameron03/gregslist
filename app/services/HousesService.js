import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
    addHome(data) {
        AppState.houses.push(new House(data))
        this.saveData()
    }

    removeHome(id) {
        AppState.houses.splice(AppState.houses.findIndex(x => x.id == id), 1)
        this.saveData()
    }

    saveData() {
        localStorage.setItem('houses', JSON.stringify(AppState.houses))
    }

    loadData() {
        let data = localStorage.getItem('houses')
        if (data == null) return

        let houses = JSON.parse(data)
        AppState.houses = houses.map(x => new House(x))
    }
}

export const housesService = new HousesService()