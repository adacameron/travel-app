const FlightDatesDeparture = require("../components/FlightDatesDeparture");

test("displays flight data,", () => {
  expect(FlightDatesDeparture().toBe("London", 1, "2022-01-05", "Madrid"));
});
