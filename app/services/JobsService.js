import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"

class JobsService {
    addJob(data) {
        AppState.jobs.push(new Job(data))
        this.saveData()
    }

    removeJob(id) {
        AppState.jobs.splice(AppState.jobs.findIndex(x => x.id == id), 1)
        this.saveData()
    }

    saveData() {
        localStorage.setItem('jobs', JSON.stringify(AppState.jobs))
    }

    loadData() {
        let data = localStorage.getItem('jobs')
        if (data == null) return

        let jobs = JSON.parse(data)
        AppState.jobs = jobs.map(x => new Job(x))
    }
}

export const jobsService = new JobsService()