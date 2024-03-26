import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
        <h1> Welcome to Gregslist</h1>
        <a href="#/cars" class="btn btn-outline-success">🚗 Buy a car!</a>
        <a href="#/houses" class="btn btn-outline-success">🏠 Buy a house!</a>
        <a href="#/jobs" class="btn btn-outline-success">💼 Find a job!</a>
      </div>
    </div>
    `
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers: [HousesController],
    view: 'app/views/HousesView.html'
  },
  {
    path: '#/jobs',
    controllers: [JobsController],
    view: 'app/views/JobsView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])