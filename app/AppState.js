import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { Job } from './models/Job.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'dodge',
      model: 'neon',
      year: 1996,
      color: 'orange',
      price: 200,
      mileage: 150000,
      automatic: true,
      imgUrl: 'https://www.carscoops.com/wp-content/uploads/2019/04/30bd62fe-2005-dodge-neon-srt4-bat-auction-60.jpg'
    }),
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1995,
      color: 'white',
      price: 20000,
      mileage: 200000,
      automatic: false,
      imgUrl: 'https://images.topgear.com.ph/topgear/images/2019/02/03/mazda-miata-mt1-1549188870.jpg'
    }),
  ]

  houses = [
    new House({
      year: 2013,
      address: "123 S Main Ave Boise, ID 83709",
      bedrooms: 5,
      bathrooms: 3,
      sqft: 1923,
      price: 465000,
      description: "YEAHH ITS A HOUSE LETS GOOOO",
      imgUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }),
    new House({
      year: 1974,
      address: "224 S Main Ave Boise, ID 83709",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
  ]

  jobs = [
    new Job({
      company: 'Google',
      title: 'Janitor',
      salary: 21000,
      description: 'He be sweepin and stuff for shorty',
      imgUrl: 'https://images.unsplash.com/photo-1615003382357-4cb74b16a7ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Job({
      company: 'CodeWorks',
      title: 'Teacher',
      salary: 99999,
      description: 'he do be teachin tho ngl',
      imgUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
  ]



}

export const AppState = createObservableProxy(new ObservableAppState())