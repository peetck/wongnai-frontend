const fetch = require("node-fetch");

exports.getTrips = async (req, res, next) => {
  const { keyword } = req.query;

  const response = await fetch("http://localhost:9000/trips");
  const trips = await response.json();

  if (keyword) {
    const filteredTrips = trips.filter(
      (trip) =>
        trip.title.includes(keyword) ||
        trip.description.includes(keyword) ||
        trip.tags.includes(keyword)
    );
    return res.json(filteredTrips);
  }

  return res.json(trips);
};
