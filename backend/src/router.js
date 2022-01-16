const Amadeus = require("amadeus");
const PexelsAPI = require('pexels-api-wrapper'); 
const router = require("express").Router();

const { CLIENT_ID, CLIENT_SECRET, API_KEY } = require("./config");

const pexelsClient = new PexelsAPI(API_KEY);

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

router.get("/nonstop=true/:origin/:location/:departure/:adults/", (req, res) => {
  const { origin, location, departure, adults } = req.params;

  amadeus.shopping.flightOffersSearch
    .get({
      originLocationCode: `${origin}`,
      destinationLocationCode: `${location}`,
      departureDate: `${departure}`,
      adults: `${adults}`,
      nonStop: true,
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (responseError) {
      console.log(responseError.code);
    });
});

router.get("/flights/nonstop=true/:origin/:departure/:days/:maxPrice", (req, res) => {
  const { origin, departure, days, maxPrice } = req.params;

  amadeus.shopping.flightDestinations
    .get({
      origin: `${origin}`,
      departureDate: `${departure}`,
      duration: `${days}`,
      maxPrice: `${maxPrice}`,
      nonStop: true,
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (responseError) {
      console.log(responseError.code);
    });
});

router.get("/location/:keyword", (req, res) => {
  const { keyword } = req.params;
  amadeus.referenceData.locations.get({
    keyword: `${keyword}`,
    subType: 'CITY'
  }).then(function (response) {
    res.send(response.data);
  })
  .catch(function (responseError) {
    console.log(responseError.code);
  });
});



router.get("/search?:query", (req, res) => {
  const { query } = req.query;

  pexelsClient.search( query )
    .then(function (response) {
      console.log(query, "query");
      res.send(response.photos)
      console.log(response.photos);
    }).
    catch(function (e) {
      console.log("error", e);
    });
})

module.exports = router;
