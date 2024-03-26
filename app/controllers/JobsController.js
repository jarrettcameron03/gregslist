import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JobsController {
    constructor() {
        jobsService.loadData()
        this.drawJobs()
    }

    drawJobs() {
        let jobInject = ''
        AppState.jobs.forEach(job => {
            jobInject += job.HTML
        })

        document.querySelector('#jobInjects').innerHTML = jobInject
    }

    addJob() {
        event.preventDefault()
        const data = getFormData(event.target)
        jobsService.addJob(data)
        this.drawJobs()
        event.target.reset()
    }

    removeJob(id) {
        jobsService.removeJob(id)
        this.drawJobs()
    }
}