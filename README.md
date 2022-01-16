# FlyMe

## The Travel Inpsiration App

With FlyMe users can search for available flights based on their budget, desired location, and trip duration. Our app also provides additional resources to help inspire a destination choice. 
 
FlyMe was created by [Ada Cameron](https://github.com/adacameron), [Mustafa Mohammed](https://github.com/mustafamohamed-web) and [Khalid Safy](https://github.com/DaXian88).

Technologies used include: React, Express, Node.js, Axios, HTML & CSS, and Javascript.  

### Features in progress
<ul> 
    <li>A budget feature that allows users bundle all their choices and track their budget in real time.</li>
    <li>Safety ratings (crime and health) for each location.</li>
     <li>Hotel and activity search functionality</li>

</ul>

## About FlyMe

FlyMe runs from a combined backend and frontend repo.

The frontend was created using [Create React App](https://github.com/facebook/create-react-app).
The backend uses [Express.js](https://expressjs.com/).

To install FlyMe, clone the repo and install the dependencies:

```sh
$ git clone git@github.com:adacameron/travel-app.git
$ cd travel-app && npm i
$ cd frontend && npm i
$ cd .. && cd backend && npm i
```

Generate your API keys, both available for free:

[Amadeus](https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335)
- CLIENT_ID
- CLIENT_SECRET


[Pexels](https://www.pexels.com/api/)
- API_KEY


In the root of the `backend` folder, create a .env file and save your keys as environment variables:

e.g: 

```sh
CLIENT_ID=dSaSwke9fDDFRT71YfGHH09KyxcRYmy20

CLIENT_SECRET=KLpkDDLdffwO3k90

API_KEY=563492pd6f9178272727272115f52fjfb57948059d2222d92366cfsd
```


Run the app in development mode:

```sh
$ cd travel-app
$ npm run dev
```

### Flight Router

`/nonstop=true/:origin/:location/:departure/:adults/`

flightOffersSearch returns specific flights based on:
- user origin
- desired destination
- date of travel
- number of passengers


`/flights/nonstop=true/:origin/:departure/:days/:maxPrice`

flightDestinations returns a list of 'inspiration' destinations based on:
- user origin
- date of travel
- duration of trip
- budget
