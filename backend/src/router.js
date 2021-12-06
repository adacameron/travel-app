const Amadeus = require("amadeus");
const router = require("express").Router();

const { CLIENT_ID, CLIENT_SECRET } = require("./config");

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

router.get("/:origin/:location/:departure/:adults", (req, res) => {
  const { origin, location, departure, adults } = req.params;

  amadeus.shopping.flightOffersSearch
    .get({
      originLocationCode: `${origin}`,
      destinationLocationCode: `${location}`,
      departureDate: `${departure}`,
      adults: `${adults}`,
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (responseError) {
      console.log(responseError.code);
    });
});

module.exports = router;
